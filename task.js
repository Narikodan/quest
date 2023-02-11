$(function(){
    $.ajax({
        url : 'http://beyont.in/angularapi/getuser.php',
        type : 'GET',
        data : {},
        success: function(res){
            // console.log(res)
            data = JSON.parse(res)
            data = data.data
            console.log(data)
            s=''
            for(let i=0; i<data.length; i++){
                s += `<option>${data[i].email}<option>`
            }
            $('#emaillist').append(s)
            
        },
        error: function(){
            console.log("Error occured!!!!!!")
        }
    })
    $('#emaillist').change(function(){
       var selectedEmail = $("#emaillist option:selected").text()
       var indexNumber = $("#emaillist option:selected").index()
       $("#getDetails").click(function(){
        var result = data[indexNumber-1]
        // console.log(result)
        $("#detailsView").html(`<p>ID:${result.id}</p><p>Name:${result.name}</p><p>Email:${result.email}</p><p>Password:${result.password}</p>`)
     })
    })
    
})