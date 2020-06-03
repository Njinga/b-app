<template>
    <!-- Footer -->
    <mdb-footer class=" bg-success text-white font-small pt-4 mt-4">
       
        <div class="footer-copyright text-center py-3">
            <mdb-container fluid>
                &copy; 2020 Copyright:Njinga Nkosi 
            </mdb-container>
        </div>
    </mdb-footer>
    <!-- Footer -->
</template>

<script>
    import { mdbFooter, mdbContainer} from 'mdbvue';
    export default {
        name: 'Footer',
        components: {
            mdbFooter,
            mdbContainer
           
        }
    }
</script>