<template>
    <div class="search-wrapper">
        <div class="search">
            <div class="search-box">
                <input v-on:keyup.enter="emitSearch" v-model="searchQuery" class="search-input" type="text"
                    placeholder="enter tags">
                <div @click="emitSearch" class="search-button">
                    <img class="search-icon" src="@/assets/search.svg" alt="search">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchQuery: '',
        };
    },
    methods: {
        emitSearch() {
            this.$emit('search', this.searchQuery);
        },
    },
};
</script>

<style scoped>
.search-wrapper {
    background-color: #282828ff;
    height: 80px;
    justify-content: center;
    display: flex;
}

.search {
    width: 60%;
    align-self: center;
}

.search-box {
    background-color: #1a1a1aff;
    width: 100%;
    border-radius: 10px;
    color: white;
    height: 28px;
    display: inline-block;
    position: relative;
    align-content: center;
}

.search-input {
    background-color: transparent;
    outline: none;
    border: none;
    padding: 0;
    width: 100%;
    color: white;
    margin-left: 8px;
}

.search-input::placeholder {
    color: white;
}

.search-button {
    position: absolute;
    right: 4px;
    top: 50%;
    transform: translateY(-50%);
    background-color: #3584e4ff;
    border-radius: 7px;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    cursor: default;
    justify-content: center;
    transition: 0.2s ease-in-out;
}

.search-button:hover {
    background-color: rgb(70, 141, 228);
    box-shadow: 0 0 10px rgba(84, 139, 207, 0.438);
}

.search-icon {
    width: 10px;
    cursor: default;
}
</style>