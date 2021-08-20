      
      function generate(){
        document.getElementById("wrapper").style.visibility = "visible";
        var l = document.getElementById("tb1").value;
        if(l==0 || l=="")
        {
          let h = document.createElement("p");
          h.innerHTML = "Please enter a valid input";
          document.getElementById("wrapper").appendChild(h);
          return;
        }
        // console.log(l);
        let tbody = document.getElementById("wtb1");
        for(var i = 0; i < l; i++)
        {
        //  tbody.innerHTML+="<tr><td><input/></td><td><input/></td></tr>";
        
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let input1 = document.createElement("input");
        let input2 = document.createElement("input");
        input1.setAttribute("id","a"+i);
        input2.setAttribute("id","b"+i);
        tr.setAttribute("id",i+1);
        td.appendChild(input1);
        tr.appendChild(td);
        td.appendChild(input2);
        tr.appendChild(td);
        tbody.appendChild(tr);
        // console.log(input1.id);
        // console.log(input2.id);
        }
      }

      function calculate(){
        var l = document.getElementById("tb1").value;
        const Grades = [];
        const Credits = [];
        var credits_sum =0;
        var total = 0;
        var flag = 0;
        var dict = {"o":10,"s":9,"a":8,"b":7,"c":6,"d":5};
        for(let i=0;i<l;i++)
        {
          let a = document.getElementById("a"+i).value.toLowerCase();
          let b = document.getElementById("b"+i).value;
          if((a=="o"||a=="s"||a=="a"||a=="b"||a=="c"||a=="d")&&(b>1 && b<10))
          {
          Grades[i] = a;
          Credits[i] = b;
          // console.log(typeof(parseInt(a))+" "+ typeof(parseInt(b)));
          total = total + parseInt(b) * parseInt(dict[a]);
          credits_sum += parseInt(b);
          }
          else
          {
          document.getElementById("res").innerHTML="Invalid data.";
          flag = 1;
          break;
        }
      }
      if(!flag){
        var r = total/credits_sum;
          document.getElementById("res").innerHTML="Your SGPA:"+r;
      }    
    }  