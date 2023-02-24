<script lang="ts">
    import "@picocss/pico";
    import {Router, Route} from "svelte-routing";
    import Nav from "./lib/Nav.svelte";
    import Add from "./routes/Add.svelte";
    import Home from "./routes/Home.svelte";
    import Mult from "./routes/Mult.svelte";
    import PlayMe from "./routes/PlayMe.svelte";
    import Share from "./routes/Share.svelte";
    import Sub from "./routes/Sub.svelte";
    import Modules from "./routes/Modules.svelte";
    import AddMatch from "./routes/matching/AddMatch.svelte";
    import MultMatch from "./routes/matching/MultMatch.svelte";
    export let url = "";
</script>
  <Router url={url}>
    <Nav />
    <div>
      <Route path="modules" component="{Modules}" />
      <Route path="addmatch" component="{AddMatch}" />
      <Route path="multmatch" component="{MultMatch}" />
      <Route path="multiplication" component="{Mult}" />
      <Route path="addition" component="{Add}" />
      <Route path="subtraction" component="{Sub}" />
      <Route path="play" component="{PlayMe}" />
      <Route path="share" component="{Share}" />
      <Route path="/"><Home /></Route>
    </div>
  </Router>
