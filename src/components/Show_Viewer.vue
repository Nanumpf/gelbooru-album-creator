<template>
    <div class="wrapper">
        <button class="next-button">Next</button>
    </div>
</template>

<script>

</script>

<style scoped>
.wrapper {
    background-color: #282828ff;
    display: flexbox;
    align-items: center;
    height: 100%;
    width: 100%;
}

.next-button {
    background-color: #3584e4ff;
    margin-top: 3vh;
    border: none;
    outline: none;
    padding: 5px 20px;
    font-size: 13pt;
    color: white;
    border-radius: 10px;
    transition: 0.2s ease-in-out;
}

.next-button:hover {
    background-color: rgb(70, 141, 228);
    box-shadow: 0 0 20px rgba(84, 139, 207, 0.438);
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.219);
}
</style>