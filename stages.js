// init context: importing modules
import http from 'k6/http';
import { Trend } from 'k6/metrics';

// init context: define k6 options
export const options = {
    vus: 10,
    duration: '30s',
};

// init context: global variables
const customTrend = new Trend('oneCustomMetric');

// init context: define custom function
function myCustomFunction() {
    // ...
} 

// setup context: return data
export function setup() {
    const res = http.get('https://httpbin.test.k6.io/get');
    return { data: res.json() };
}

// teardown context
export function teardown(data) {
    console.log(JSON.stringify(data));
}

// VU Code
// It's best to think that each stage and each VU has access to a fresh "copy" of whatever data the setup() function returns.
export default function (data) {
    console.log(JSON.stringify(data));
}