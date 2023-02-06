<script>
  let params = new URLSearchParams(location.search);
  let points = params.get('score')
  let string = params.get('game')
  let gameName = string.charAt(0).toUpperCase() + string.slice(1)
  let copiedLink = false;

  const data = {
        game:gameName,
        user:"",
        score:points,
        path:"/mult"
    }

  const copyLink = async () => {

    let gameData = btoa(JSON.stringify(data))
    let url = `${window.location.origin}/play?info=${gameData}`
    try {
      await navigator.clipboard.writeText(url);
      copiedLink = true;
    } catch(e){
      console.error("e")
    }
  }


</script>
<dialog id="shareModal" open>
    <article>
    <a href="/mult"
    aria-label="Close"
    class="close"
    data-target="modal-example">
    </a>
    <h2>Send to a friend</h2>
    <p>Share your score with your friends! Challenge your friends and see who's the better player. </p>
    <h3>Your Points: {points}</h3>
    <label for="name"><strong>Your Name: </strong></label>
    <input id="name" bind:value={data.user} placeholder="Johnny Appleseed" type="text"/>
    <footer>
        <button on:click={copyLink}>Copy Link</button>
        {#if (copiedLink)}
          <p>Link Copied!</p>
        {/if}
    </footer>
    </article>
</dialog>
<style>
    dialog#shareModal article{
    border-radius: 10px;
    border: 2px solid #9381FF;
}

button{
    background-color: #9381FF;
    border: 1px solid #9381FF;
    color: white;
}
footer {
  text-align: center;
}
</style>