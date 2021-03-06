const express = require("express");
const app = require("./app");
const request = require("supertest");

describe("/", () => {
  it("will display route details in json", async () => {
    const data = {
      "0": "GET   /",
      "1": "POST   /api/register",
      "2": "GET   /api/commonstudents",
      "3": "POST   /api/suspend",
      "4": "POST   /api/retrievefornotifications",
    };
    const response = await request(app).get("/");
    expect(response.body).toMatchObject(data);
  });
});
