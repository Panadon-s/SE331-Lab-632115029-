app.component('product-details',{
    props:{
        details: {
            type: Array
        }
    },

    template:
        /*html*/
        `<div>
            <ul>
                <li v-for="detail in details">{{detail}}</li> 
            </ul>         
        </div>`
})