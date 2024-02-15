import { handler } from "../lambda-function/index.js";

describe("Email Function", () => {
  // make new event with json body to use
  class Event {
    constructor(
      public honeypot: boolean,
      public email: string,
      public message: string
    ) {}
    get body() {
      return {
        body: JSON.stringify({
          honeypot: this.honeypot,
          email: this.email,
          message: this.message,
        }),
      };
    }
  }

  // function for testing handler function. expected in order,
  // event to process, http status, success boolean
  async function mockhandler(
    event: { body: string },
    status: number,
    success: boolean
  ): Promise<void> {
    const result = await handler(event);
    const body = JSON.parse(result.body);

    expect(result.statusCode).toBe(status);
    expect(result.headers).toEqual({
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "https://www.navarrogardening.com",
      "Access-Control-Allow-Methods": "POST",
    });
    if (body.message) {
      expect(body.message).toEqual("string");
    }
    expect(body.success).toEqual(success);
  }

  // for successful sending
  test("returns correct info when successful", async () => {
    const event = new Event(
      false,
      "test@gmail.com",
      "this is a random message that I am typing out just so it's long enough to send"
    ).body;
    await mockhandler(event, 200, true);
  });

  // for invalid email sending
  test("returns correct error when email does not pass", async () => {
    const event = new Event(
      false,
      "test this is not an email",
      "this is a random message that I am typing out just so it's long enough to send"
    ).body;

    await mockhandler(event, 400, false);
  });

  // for a message that is to short sending
  test("returns correct error when message Is to short", async () => {
    const event = new Event(false, "test@gmail.com", "to short").body;
    await mockhandler(event, 400, false);
  });

  // for a message that is to long sending
  test("returns correct error when message Is to long", async () => {
    let longMessage = "1234567890";
    for (let i = 0; i < 100; i++) {
      longMessage += "1234567890";
    }
    longMessage += "1";
    const event = new Event(false, "test@gmail.com", longMessage).body;
    await mockhandler(event, 400, false);
  });

  // for when someone sends some random giberash
  test("returns correct error when someone sends some random giberash", async () => {
    await mockhandler(
      "some random giberash someone might send" as any,
      500,
      false
    );
  });
});
