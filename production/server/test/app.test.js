const should = require("chai").should();
const expect = require("chai").expect;
const assert = require("chai").assert;
const request = require("request");

describe("App", () => {
    var app = require("../app");

    it("App is correctly defined", done => {
        should.exist(app);
        done();
    });
});

describe("Middleware", () => {
    it("Middleware successfully executed", done => {
        
        done();
    });
});

describe("Routes", () => {
    var users = require("../routes/users");
    var dashboard = require("../routes/dashboard");
    var calendar = require("../routes/calendar");
    var tasks = require("../routes/tasks");
    var evaluations = require("../routes/evaluations");
    var courses = require("../routes/courses");
    var search = require("../routes/search");
    var settings = require("../routes/settings");
    var email = require("../routes/email");    

    it("Users route successfully imported", done => {
        should.exist(users);
        done();
    });

    it("Dashboard route successfully imported", done => {
        should.exist(dashboard);
        done();
    });

    it("Calendar route successfully imported", done => {
        should.exist(calendar);
        done();
    });

    it("Tasks route successfully imported", done => {
        should.exist(tasks);
        done();
    });

    it("Evaluations route successfully imported", done => {
        should.exist(evaluations);
        done();
    });

    it("Courses route successfully imported", done => {
        should.exist(courses);
        done();
    });

    it("Search routes successfully imported", done => {
        should.exist(search);
        done();
    });

    it("Settings routes successfully imported", done => {
        should.exist(settings);
        done();
    });

    it("Email route successfully imported", done => {
        should.exist(email);
        done();
    });
});




describe("", () => {
    describe("", () => {
        it("Home page rendered OK", (done) => {
            request("http://localhost:3001/home.html",(err, res, body) => {
                expect(res.statusCode).to.equal(200);
                done(); 
            });
        });
    });
});
