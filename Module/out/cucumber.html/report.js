$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "positive login scenario",
  "description": "",
  "id": "login-feature;positive-login-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user is on login",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user enter username and password",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Parameter"
      ],
      "line": 5
    },
    {
      "cells": [
        "komal",
        "komu@123",
        "param1"
      ],
      "line": 6
    },
    {
      "cells": [
        "komu",
        "komu@78",
        "param2"
      ],
      "line": 7
    },
    {
      "cells": [
        "anvi",
        "anu4",
        "param3"
      ],
      "line": 8
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user clicks on submit",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user is on Home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_login()"
});
formatter.result({
  "duration": 239294300,
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
});