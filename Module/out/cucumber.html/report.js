$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "positive login scenario",
  "description": "",
  "id": "login-feature;positive-login-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on login",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"\u003cusername\u003e\"and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "##When user enter \"komalk\" and \"komu@8\""
    },
    {
      "line": 9,
      "value": "##|username|password|"
    },
    {
      "line": 10,
      "value": "##|komal|komu@123|"
    },
    {
      "line": 11,
      "value": "##|amit|curie@8|"
    }
  ],
  "line": 12,
  "name": "user clicks on submit",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user is on Home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "login-feature;positive-login-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 15,
      "id": "login-feature;positive-login-scenario;;1"
    },
    {
      "cells": [
        "komal",
        "komu@123"
      ],
      "line": 16,
      "id": "login-feature;positive-login-scenario;;2"
    },
    {
      "cells": [
        "amit",
        "curie@8"
      ],
      "line": 17,
      "id": "login-feature;positive-login-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 2,
  "name": "webDriver",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "webDriver initialize",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.webdriver_initialize()"
});
formatter.result({
  "duration": 257182600,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "positive login scenario",
  "description": "",
  "id": "login-feature;positive-login-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on login",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"komal\"and \"komu@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "##When user enter \"komalk\" and \"komu@8\""
    },
    {
      "line": 9,
      "value": "##|username|password|"
    },
    {
      "line": 10,
      "value": "##|komal|komu@123|"
    },
    {
      "line": 11,
      "value": "##|amit|curie@8|"
    }
  ],
  "line": 12,
  "name": "user clicks on submit",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user is on Home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_login()"
});
formatter.result({
  "duration": 38100,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_submit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_is_on_Home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 2,
  "name": "webDriver",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "webDriver initialize",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.webdriver_initialize()"
});
formatter.result({
  "duration": 55300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "positive login scenario",
  "description": "",
  "id": "login-feature;positive-login-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user is on login",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter \"amit\"and \"curie@8\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 8,
      "value": "##When user enter \"komalk\" and \"komu@8\""
    },
    {
      "line": 9,
      "value": "##|username|password|"
    },
    {
      "line": 10,
      "value": "##|komal|komu@123|"
    },
    {
      "line": 11,
      "value": "##|amit|curie@8|"
    }
  ],
  "line": 12,
  "name": "user clicks on submit",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user is on Home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_login()"
});
formatter.result({
  "duration": 28900,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_submit()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.user_is_on_Home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 2,
  "name": "webDriver",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "webDriver initialize",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.webdriver_initialize()"
});
formatter.result({
  "duration": 78500,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 19,
      "value": "##Scenario Outline: positive login scenario"
    },
    {
      "line": 20,
      "value": "##Given user is on login"
    },
    {
      "line": 21,
      "value": "##When user enter \"\u003cusername\u003e\"and wrong\"\u003cpassword\u003e\""
    },
    {
      "line": 22,
      "value": "##Then user check name"
    },
    {
      "line": 23,
      "value": "##Examples:"
    },
    {
      "line": 24,
      "value": "##|cap|capg@34|"
    }
  ],
  "line": 26,
  "name": "Homepage scenario",
  "description": "",
  "id": "login-feature;homepage-scenario",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "we click on Login",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "we are on Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.we_click_on_Login()"
});
formatter.result({
  "duration": 43000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.we_are_on_Homepage()"
});
formatter.result({
  "duration": 54000,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "webDriver",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "webDriver initialize",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.webdriver_initialize()"
});
formatter.result({
  "duration": 52500,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Title",
  "description": "",
  "id": "login-feature;title",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "user is on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "check the title of page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_homepage()"
});
formatter.result({
  "duration": 52900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.check_the_title_of_page()"
});
formatter.result({
  "duration": 42200,
  "status": "passed"
});
});