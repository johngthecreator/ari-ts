<script>
    import { timerStart } from "../timeStore";


    const closeModal = () => {
        document.getElementById("startModal").removeAttribute('open');
        timerStart.set(true)
    }



    // const openModal = () => {
    //     document.getElementById("modal").setAttribute('open','true');
    // }
</script>
<dialog id="startModal" open>
  <article>
    <a href="/"
      aria-label="Close"
      class="close"
      data-target="modal-example">
    </a>
    <h3>Multiplication</h3>
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