const express = require("express");
const router = express.Router();
const controller = require("../controllers/tasks.test");

// testing tools
const should = require("chai").should();
const expect = require("chai").expect;
const assert = require("chai").assert;
const request = require("supertest");


/* Simulated routes */

router.get("/past", controller.tasksPast);

/* Unit tests */

describe("Route tests", () => {
    const app = require("../../app");

    describe("", () => {
        it("", done => {
            return request(app)
            .get("/past")
            .then((res) => {
                assert.equal(res.status, 200);
            });
            done();
        });
    });
});



