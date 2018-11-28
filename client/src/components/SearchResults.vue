<template>
    <div id="results" >
        <div class="list-group">
            <router-link
            :to="{ 
                path: 'mission_details', 
                query: { 
                    flight_number: `${result.flight_number}` }}"
                    >
                    <h5 class="list-group-item list-group-item-action">
                        {{ result.mission_name }}
                    </h5>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    result: {}
  }
};
</script>

<style scoped>
.list-group-item-action {
  color: #2a9fd6;
}
</style>
