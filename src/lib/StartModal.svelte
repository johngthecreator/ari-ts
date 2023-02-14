<script>
    import { timerStart } from "../ts_modules/timeStore";
    export let title;


    const closeModal = () => {
        document.getElementById("startModal").removeAttribute('open');
        timerStart.set(true)
    }

</script>
<dialog id="startModal" open>
  <article>
    <a href="/modules"
      aria-label="Close"
      class="close"
      data-target="modal-example">
    </a>
    <h3>{title}</h3>
    <p>Answer as many questions as you can in 15 seconds!</p>
    <footer>
      <button on:click={closeModal}>Start</button>
    </footer>
  </article>
</dialog>

<style>
  dialog#startModal article{
    border-radius: 10px;
    border: 2px solid #9381FF;
  }
  button{
    background-color: #9381FF;
    border: 1px solid #9381FF;
    color: white;
  }
  
</style>