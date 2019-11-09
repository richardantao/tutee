process.env.NODE_ENV = "testing";

const mongoose = require("mongoose");
const User = require("../models/User.model");

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
const should = chai.should();

chai.use(chaiHttp);

describe("Calendar", () => {
    User.update({  }, {
        $pull: {

        }
    });    
});

describe("/settings/profile", () => {
    it("", done => {

    });
});

describe("/settings/profile/update", () => {
    it("", done => {

    });
});

describe("/settings/password", () => {
    it("", done => {

    });
});

describe("/settings/password/update", () => {
    it("", done => {

    });
});

describe("/settings/preferences", () => {
    it("", done => {

    });
});

describe("/settings/preferences/update", () => {
    it("", done => {

    });
});






