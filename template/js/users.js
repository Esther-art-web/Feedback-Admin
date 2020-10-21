

    document.querySelector('#addUser').addEventListener('click',function(){
        var firstName= document.querySelector('#userFirstName').value;
        var lastName= document.querySelector('#userLastName').value;
        var email= document.querySelector('#userEmail').value;
        var fullName= firstName+lastName;
        var phone= document.querySelector('#phone').value
        
        if (firstName ===''|lastName ===''|email ===''|phone ==='' ){
          console.log('j')
          document.querySelector('#warn').innerHTML= '<b>Warning: </b>You need to assign values to all the fields'
          document.querySelector('#warn').style.color='red';

        }
        else{
          var userDetails={
            image: 'picture',
            fullName: fullName,
            email: email,
            subscription: function(){
                if (document.querySelector('#monthly').checked){
                    return 'monthly';
                }
                return 'annually';
            },
            deadline: 'May 15,2015',
            phoneNo: phone,
            country: function(){
                return document.querySelector('#userCountry').value
            }
        }
        document.querySelector('#warn').innerHTML= ''
        let table=document.querySelector('#userTable');
        let tr= document.createElement('tr')
        let details= [userDetails.image,userDetails.fullName,userDetails.email,userDetails.subscription(),userDetails.deadline,userDetails.phoneNo,userDetails.country()]
        let nodes= details.map(n=>{
            let td= document.createElement('td')
            td.textContent=n;
            return td
        });
        let icons= document.createElement('td')
        let span1 =document.createElement('span')
        span1.className="mdi mdi-border-color";
        span1.id='edit'
      
        let span2 =document.createElement('span')
        span2.className="mdi mdi-delete";
        span2.id='delete'
        icons.append(span1);
        icons.append(span2)
       
        
        tr.append(...nodes)
        tr.append(icons);
        
        console.log(icons)
        table.appendChild(tr);
        modal.style.display = "none";
        }
    
        
    });
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  document.getElementsByTagName('form')[0].reset();
  document.querySelector('#warn').innerHTML='';
  modal.style.display = "block";
  
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.querySelector('#edit').addEventListener('click', function(){
  modal.style.display = "block";
});

