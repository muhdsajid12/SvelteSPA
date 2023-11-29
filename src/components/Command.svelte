<script>
  import { backEndUrl } from "../main";
// get token from auth.js

  let command = {
    UserId: 0,
    Token: "tes",
    Message: "",
    IntervalTime: 100,
    Auto: false,
  };

  async function handleSubmit() {
    const formData = command;

    try {
      let url = backEndUrl + "Command/Insert";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(response);

      if (response.ok) {
        const result = await response.json();
        console.log("Result:", result);
        // Handle successful response here
      } else {
        // Handle error response
        console.error("Error:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
</script>

<div class="container-fluid">
  <div class="container-fluid">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title fw-semibold mb-4">Forms</h5>
        <div class="card">
          <div class="card-body">
            <form>
              <div class="mb-3">
                <label for="" class="form-label">To </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">Select your contacts</div>
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Message</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  bind:value={command.Message}
                />
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Date Start</label>
                <input type="text" class="form-control" />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                  bind:value={command.Auto}
                />
                <label class="form-check-label" for="exampleCheck1">Auto</label>
              </div>
              <div class="mb-3">
                <label for="" class="form-label">Interval</label>
                <input type="number" step="0.01" class="form-control" bind:value={command.IntervalTime}/>
              </div>
              <button type="submit" class="btn btn-primary" on:click={() => handleSubmit()}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
