<script>
    export let finalScore;
    const tryAgain = () =>{
        location.reload()
    }
</script>
<dialog id="endModal" open>
  <article>
    <a href="/"
      aria-label="Close"
      class="close"
      data-target="modal-example">
    </a>
    <h2>Times Up!</h2>
    <p>Let's reveiew the round and see how many points you got.</p>
    <h3>Total Points: {finalScore}</h3>
    <footer>
        <a id="shareButton" href="/share?game=multiplication&score={finalScore}">Share Your Score</a>
        <button on:click={tryAgain}>Try Again</button>
    </footer>
  </article>
</dialog>

<style>
  dialog#endModal article{
    border-radius: 10px;
    border: 2px solid #9381FF;
  }

  button{
    background-color: #9381FF;
    border: 1px solid #9381FF;
    color: white;
  }
  a#shareButton {
    display: block;
    width: 100%;
    margin-bottom: var(--spacing);
    text-align: center;
    padding: 15px 20px;
    background-color: #9381FF;
    border: 1px solid #9381FF;
    color: white;
    border-radius: var(--border-radius);
    text-decoration: none;
    }
</style>