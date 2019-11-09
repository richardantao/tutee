process.env.NODE_ENV = "testing";

const mongoose = require("mongoose");
const User = require("../models/User.model");

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
const should = chai.should();

chai.use(chaiHttp);

describe("Dashboard", () => {
    beforeEach(done => {
        User.update({  }, {
            $pull: {
                class: {

                }
            }
        }, err => {
            done();
        });
    });

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

describe("/dashboard", () => {
    it("Fetches classes for today", done => {
        chai.request(server)
        .get("/dashboard")
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("array");
            res.body.length.should.be.eql(0);
        done();
      });
    });

    it("Fetches tasks due within the next 7 days", done => {
        chai.request(server)
        .get("/dashboard")
        .end((err, res) => {
            
        done();
      });
    }); 

    it("Fetches assessments due within the next 7 days", done => {
        chai.request(server)
        .get("/dashboard")
        .end((err, res) => {
            
        done();
      });
    }); 
});

describe("/dashboard/classes/edit/:classId", () => {
    it("", done => {

    });
});

describe("/dashboard/classes/update/:classId", () => {
    it("", done => {

    });
});

describe("/dashboard/classes/delete/:classId", () => {
    it("", done => {

    });
});

describe("/dashboard/tasks/new", () => {
    it("", done => {
        
    });
});

describe("/dashboard/tasks/create", () => {
    it("", done => {

    });
});

describe("/dashboard/tasks/update/:taskId", () => {
    it("", done => {

    });
});

describe("/dashboard/tasks/delete/:taskId", () => {
    it("", done => {

    });
});

describe("/dashboard/assessments/edit/:assessmentId", () => {
    it("", done => {

    });
});

describe("/dashboard/assessments/update/:assessmentId", () => {
    it("", done => {

    });
});

describe("/dashboard/assessments/delete/:assessmentId", () => {
    it("", done => {

    });
});







