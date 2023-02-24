<script>
    export let title;
    export let message;
    const tryAgain = () =>{
        location.reload()
    }
</script>
<dialog id="endModal" open>
  <article>
    <a href="/modules"
      aria-label="Close"
      class="close"
      data-target="modal-example">
    </a>
    <h2>{title}</h2>
    <p>{message}</p>
    <footer>
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
</style>