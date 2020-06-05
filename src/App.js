import React, { useState, useEffect, createRef } from "react";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Container, Grid, Form, TextArea } from "semantic-ui-react";

if (!Number.MAX_SAFE_INTEGER) {
  Number.MAX_SAFE_INTEGER = 9007199254740991; // Math.pow(2, 53) - 1;
}
Number.isSafeInteger =
  Number.isSafeInteger ||
  function (value) {
    return (
      Number.isInteger(value) && Math.abs(value) <= Number.MAX_SAFE_INTEGER
    );
  };

/*
[
    {
        "cbsaDescription": "Anchorage",
        "cbsaTypeLookup": 1,
        "state": "AK",
        "stateName": "Alaska",
        "cbsaCode": 11260
    },
    {
        "cbsaDescription": "Fairbanks",
        "cbsaTypeLookup": 1,
        "state": "AK",
        "stateName": "Alaska",
        "cbsaCode": 21820
    }
]
*/

function DataValue(type, raw, isAltered, value) {
  this.type = type;
  this.raw = raw;
  this.isAltered = isAltered;
  this.value = value;
}

function processInput(input) {
  if (input instanceof Array) {
    for (let i = 0, l = input.length; i < l; i++) {
      input[i] = processInput(input[i]);
    }
  } else if (typeof input === "object" && !Array.isArray(input)) {
    for (let key in input) {
      input[key] = processInput(input[key]);
    }
  } else {
    let type = typeof input;
    if (type === "number") {
      if (Number.isSafeInteger(input)) {
        return new DataValue(type, input, true, `NumberInt(${input})`);
      } else {
        return new DataValue(type, input, false, input);
      }
    } else {
      return new DataValue(type, input, false, input);
    }
  }

  return input;
}

function buildOutput(output, depth = 0) {
  let out = [];
  if (output instanceof Array) {
    out.push("[".padStart(1 + depth * 4, " "));
    for (let i = 0, l = output.length; i < l; i++) {
      if (!(output[i] instanceof DataValue)) {
        out = [...out, ...buildOutput(output[i], depth + 1)];
      } else {
        let o = buildOutput(output[i], depth + 1);
        out.push(o.padStart(o.length + (depth + 1) * 4));
      }

      if (i < l - 1) {
        out[out.length - 1] += ",";
      }
    }
    out.push("]".padStart(1 + depth * 4, " "));
  } else if (
    typeof output === "object" &&
    !Array.isArray(output) &&
    !(output instanceof DataValue)
  ) {
    out.push("{".padStart(1 + depth * 4, " "));
    if (Object.keys(output).length) {
      for (let key in output) {
        let o = buildOutput(output[key], depth + 1);
        let s = `"${key}": ${o}, `;
        out.push(s.padStart(s.length + (depth + 1) * 4));
      }
      out[out.length - 1] = out[out.length - 1].slice(0, -1);
    }
    out.push("}".padStart(1 + depth * 4, " "));
  } else {
    if (output.type === "string") {
      return `"${output.value}"`;
    } else if (output.type === "number") {
      return `${output.value}`;
    }
    return output.value;
  }
  return out;
}

function App() {
  let ref = createRef();
  let [input, setInput] = useState();
  let [output, setOutput] = useState();

  useEffect(() => {
    try {
      let processed = processInput(JSON.parse(input));
      console.log(processed);
      setOutput(buildOutput(processed).join("\n"));
    } catch (err) {
      // console.log("Not valid JSON", err);
      setOutput("Please enter a valid JSON string");
    }
  }, [input]);

  return (
    <div className="App">
      <Container>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Form>
                <TextArea
                  rows={30}
                  placeholder="Enter JSON"
                  onChange={(e, d) => setInput(d.value)}
                  ref={ref}
                />
              </Form>
            </Grid.Column>
            <Grid.Column>
              <Form>
                <TextArea rows={30} placeholder="Tell us more" value={output} />
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
