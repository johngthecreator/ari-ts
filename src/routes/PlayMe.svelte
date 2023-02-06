<script>
  //test url
  //http://localhost:5173/play?info=eyJnYW1lIjoiTXVsdGktTWFkbmVzcyIsInVzZXIiOiJKb2huIiwic2NvcmUiOjExMCwicGF0aCI6Ii9tdWx0In0
  let params = new URLSearchParams(location.search);
  let data = params.get('info')
  let decode = JSON.parse(atob(data))
  let gameName = decode.game
  let user = ((decode.user.length == 0) ? "Johnny Appleseed": decode.user)
  let score = decode.score
  let path = decode.path
</script>
<dialog id="playModal" open>
    <article>
      <a href="/"
      aria-label="Close"
      class="close"
      data-target="modal-example">
      </a>
      <h2>Play {gameName}</h2>
      <p>{user} scored <strong>{score} points</strong>! Can you beat them?</p>
      <footer>
          <a id="playButton" href="{path}">Play Game</a>
      </footer>
    </article>
</dialog>
<style>
    dialog#playModal article{
    border-radius: 10px;
    border: 2px solid #9381FF;
  }

  a#playButton {
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