<script lang="ts">
  import {Router, Route} from "svelte-routing";
  import Nav from "./lib/Nav.svelte";
  import Home from "./routes/Home.svelte";
  import Mult from "./routes/Mult.svelte";
  import PlayMe from "./routes/PlayMe.svelte";
  import Share from "./routes/Share.svelte";
  export let url = "";
</script>
  <Router url={url}>
    <Nav />
    <div>
      <Route path="mult" component="{Mult}" />
      <Route path="play" component="{PlayMe}" />
      <Route path="share" component="{Share}" />
      <Route path="/"><Home /></Route>
    </div>
  </Router>
