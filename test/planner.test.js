process.env.NODE_ENV = "testing";

const mongoose = require("mongoose");
const User = require("../models/User.model");

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
const should = chai.should();

chai.use(chaiHttp);

describe("Planner", () => {
    beforeEach(done => {
        User.update({  }, {
            $pull: {
                task: {

                }
            }
        }, err => {
            done();
        });
    });
    beforeEach(done => {
        User.update({  }, {
            $pull: {
                assessment: {

                }
            }
        }, err => {
            done();
        });
    });
});

describe("/planner", () => {
    it("", done => {

    });
});

describe("/planner/past", () => {
    it("", done => {

    });
});

describe("", () => {
    it("", done => {

    });
});

describe("/planner/tasks/new", () => {
    it("", done => {

    });
});

describe("/planner/tasks/create", () => {
    it("", done => {

    });
});

describe("/planner/tasks/edit/:taskId", () => {
    it("", done => {

    });
});

describe("/planner/tasks/update/:taskId", () => {
    it("", done => {

    });
});

describe("/planner/tasks/delete/:taskId", () => {
    it("", done => {

    });
});

describe("/planner/assessments/new", () => {
    it("", done => {

    });
});

describe("/planner/assessments/create", () => {
    it("", done => {

    });
});

describe("/planner/assessments/edit/:assessmentId", () => {
    it("", done => {

    });
});

describe("/planner/assessments/update/:assessmentId", () => {
    it("", done => {

    });
});

describe("/planner/assessments/delete/:assessmentId", () => {
    it("", done => {

    });
});





