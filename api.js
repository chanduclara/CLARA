export default {
  async fetch(request) {
    return new Response(
      JSON.stringify({
        message: "CLARA backend is working!"
      }),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};
