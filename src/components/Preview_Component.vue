<template>
    <div class="preview-container">
        <div class="grid-container">
            <div v-for="image in images" :key="image.id" class="grid-item">
                <img :src="image.file_url" :alt="'Image ' + image.id" />
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        images: {
            type: Array,
            default: () => [],
        },
    },
};
</script>


<style scoped>
.preview-container {
    background-color: #282828ff;
    display: flexbox;
    height: 70vh;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(6, auto);
    grid-template-rows: repeat(2, auto);
    gap: 20px;
    padding: 40px;
    height: 60vh;
}

@media (max-width: 768px) {
    .grid-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .grid-container {
        grid-template-columns: 1fr;
        /* 1 column for mobile screens */
    }
}

.grid-item {
    text-align: center;
    border-radius: 10px;
    align-content: center;
}

.grid-item img {
    width: 100%;
    /* Fit image within the grid item */
    border-radius: 10px;
    /* Rounded corners */
}
</style>