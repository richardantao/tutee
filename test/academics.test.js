process.env.NODE_ENV = "testing";

const mongoose = require("mongoose");
const User = require("../models/User.model");

const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
const should = chai.should();

chai.use(chaiHttp);

describe("Academics", () => {
    beforeEach(done => {
        User.update({  }, {
            $pull: {
                year: {

                }
            }
        }, err => {
            done();
        });
    }); 

    beforeEach(done => {
        User.update({  }, {
            $pull: {
                term: {
                    
                }
            }
        }, err => {
            done();
        });
    }); 

    beforeEach(done => {
        User.update({  }, {
            $pull: {
                course: {
                    
                }
            }
        }, err => {
            done();
        });
    }); 

    beforeEach(done => {
        User.update({  }, {
            $pull: {
                module: {
                    
                }
            }
        }, err => {
            done();
        });
    }); 
});

describe("/academics", () => {
    it("", done => {
        chai.request(server)
        .get("/dashboard")
    });
});

describe("/academics/years/new", () => {
    it("", done => {
        chai.request(server)
        .get("/academics/years/new")
    });
});

describe("/academics/years/create", () => {
    it("", done => {
        
    });
});
describe("/academics/years/edit/:yearId", () => {
    it("", done => {
        chai.request(server)
        .get("/academics/years/edit/:yearId")
    });
});

describe("/academics/years/update/:yearId", () => {
    it("", done => {
        
    });
});

describe("/academics/years/delete/:yearId", () => {
    it("", done => {
        
    });
});

describe("/academics/terms/new", () => {
    it("", done => {
        chai.request(server)
        .get("/dashboard")
    });
});

describe("/academics/terms/create", () => {
    it("", done => {
        
    });
});
describe("/academics/terms/edit/:termId", () => {
    it("", done => {
        chai.request(server)
        .get("/dashboard")
    });
});

describe("/academics/terms/update/:termId", () => {
    it("", done => {
        
    });
});

describe("/academics/terms/delete/:termId", () => {
    it("", done => {
        
    });
});

describe("/academics/courses/new", () => {
    it("", done => {
        chai.request(server)
        .get("/academics/courses/new")
    });
});

describe("/academics/courses/create", () => {
    it("", done => {
        
    });
});
describe("/academics/courses/edit/:courseId", () => {
    it("", done => {
        chai.request(server)
        .get("/academics/courses/edit/:courseId")
    });
});

describe("/academics/courses/update/:courseId", () => {
    it("", done => {
        
    });
});

describe("/academics/courses/delete/:courseId", () => {
    it("", done => {
        
    });
});

describe("/academics/modules/new", () => {
    it("", done => {
        chai.request(server)
        .get("/academics/modules/new")
    });
});

describe("/academics/modules/create", () => {
    it("", done => {
        
    });
});
describe("/academics/modules/edit/:moduleId", () => {
    it("", done => {
        chai.request(server)
        .get("/academics/modules/edit/:moduleId")
    });
});

describe("/academics/modules/update/:moduleId", () => {
    it("", done => {
        
    });
});

describe("/academics/modules/delete/:yearId", () => {
    it("", done => {
        
    });
});


