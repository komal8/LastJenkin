package com.KHS.Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
/*
@RunWith(Cucumber.class)
@CucumberOptions(features="features",glue="com.KHS.Stepdef",dryRun=false,monochrome=true,plugin= {"pretty","json:test-output/cucumber.json","html:out/cucumber.html","junit:out/cucmber.xml"})
public class TestRunner {

}*/
@RunWith(Cucumber.class)
@CucumberOptions(features="features",glue="com.KHS.Stepdef",dryRun=false,monochrome=true,plugin= {"pretty","json:test-output/cucumber.json","html:out/cucumber.html","junit:out/cucmber.xml"})
public class TestRunner {

}