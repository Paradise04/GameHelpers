      // JavaScript for calculating price based on selected greetings
      //function calculatePrice() {
        //var greeting1 = document.getElementById("greeting1").value;
        //var greeting2 = document.getElementById("greeting2").value;
        //var totalPrice = 0;

        //if ((greeting1 === "hello" && greeting2 === "hey") || (greeting1 === "hey" && greeting2 === "hello")) {
          //totalPrice = 10;
        //} else if ((greeting1 === "hi" && greeting2 === "sup") || (greeting1 === "sup" && greeting2 === "hi")) {
          //totalPrice = 20;
        //}

        //document.getElementById("totalPrice").textContent = totalPrice;
      //



      const continueBtn = document.getElementById("continue-btn");

      continueBtn.addEventListener("click", function() {
        const currentRank = document.getElementById("current-rank").value;
        const desiredRank = document.getElementById("desired-rank").value;
        
        const card = document.querySelector(".card");
        let total;
      //bronze I 
        if (currentRank === "Bronze I" && desiredRank === "Bronze I") {
          total = "n/a";
        } else if (currentRank === "Bronze I" && desiredRank === "Bronze II") {
          total = "5.32";
        } else if (currentRank === "Bronze I" && desiredRank === "Bronze III") {
          total = "10.64";}
      
          else if (currentRank === "Bronze I" && desiredRank === "Silver I") {
            total = "19.86";}
      
          else if (currentRank === "Bronze I" && desiredRank === "Silver II") {
            total = "29.07";}
      
          else if (currentRank === "Bronze I" && desiredRank === "Silver III") {
            total = "38.29";}
      
          else if (currentRank === "Bronze I" && desiredRank === "Gold I") {
            total = "51.23";}
      
          else if (currentRank === "Bronze I" && desiredRank === "Gold II") {
            total = "64.18";}




          else if (currentRank === "Bronze I" && desiredRank === "Gold III") {
          total = "77.12";}

          else if (currentRank === "Bronze I" && desiredRank === "Platinum I") {
            total = "91.84";}


          else if (currentRank === "Bronze I" && desiredRank === "Platinum II") {
            total = "110.29";}


          else if (currentRank === "Bronze I" && desiredRank === "Platinum III") {
            total = "130.7";}

          else if (currentRank === "Bronze I" && desiredRank === "Diamond I") {
            total = "158.54";}

          else if (currentRank === "Bronze I" && desiredRank === "Diamond II") {
            total = "195.6";}

          else if (currentRank === "Bronze I" && desiredRank === "Diamond III") {
            total = "240.13";}


          else if (currentRank === "Bronze I" && desiredRank === "Champion I") {
            total = "288.35";}

          
          else if (currentRank === "Bronze I" && desiredRank === "Champion II") {
            total = "346";}

          else if (currentRank === "Bronze I" && desiredRank === "Champion III") {
            total = "416.76";}
          

          else if (currentRank === "Bronze I" && desiredRank === "Grand Champion I") {
            total = "511.66";}

          else if (currentRank === "Bronze I" && desiredRank === "Grand Champion II") {
            total = "670";}


          else if (currentRank === "Bronze I" && desiredRank === "Grand Champion III") {
            total = "867";}
  
          
          else if (currentRank === "Bronze I" && desiredRank === "Super Sonic Legend") {
            total = "1152.8";}
  

          
















        









        //bronze II
        else if (currentRank === "Bronze II" && desiredRank === "Bronze I") {
          total = "n/a";}
        else if (currentRank === "Bronze II" && desiredRank === "Bronze II") {
            total = "n/a";}
        else if (currentRank === "Bronze II" && desiredRank === "Bronze III") {
          total = "5.32";}
      
        else if (currentRank === "Bronze II" && desiredRank === "Silver I") {
          total = "14.54";}
      
        else if (currentRank === "Bronze II" && desiredRank === "Silver II") {
          total = "23.75";}
      
        else if (currentRank === "Bronze II" && desiredRank === "Silver III") {
          total = "32.97";}
      
        else if (currentRank === "Bronze II" && desiredRank === "Gold I") {
          total = "45.92";}
      
        else if (currentRank === "Bronze II" && desiredRank === "Gold II") {
          total = "58.85";}




        else if (currentRank === "Bronze II" && desiredRank === "Gold III") {
          total = "71.8";}

        else if (currentRank === "Bronze II" && desiredRank === "Platinum I") {
          total = "86.52";}


        else if (currentRank === "Bronze II" && desiredRank === "Platinum II") {
          total = "104.97";}


        else if (currentRank === "Bronze II" && desiredRank === "Platinum III") {
          total = "125.38";}

        else if (currentRank === "Bronze II" && desiredRank === "Diamond I") {
          total = "153.22";}

        else if (currentRank === "Bronze II" && desiredRank === "Diamond II") {
          total = "190.28";}

        else if (currentRank === "Bronze II" && desiredRank === "Diamond III") {
          total = "234.8";}


        else if (currentRank === "Bronze II" && desiredRank === "Champion I") {
          total = "283.03";}

          
        else if (currentRank === "Bronze II" && desiredRank === "Champion II") {
          total = "340.68";}

        else if (currentRank === "Bronze II" && desiredRank === "Champion III") {
          total = "411.44";}
          

        else if (currentRank === "Bronze II" && desiredRank === "Grand Champion I") {
          total = "506.34";}

        else if (currentRank === "Bronze II" && desiredRank === "Grand Champion II") {
          total = "664.71";}


        else if (currentRank === "Bronze II" && desiredRank === "Grand Champion III") {
          total = "862.28";}
  
          
        else if (currentRank === "Bronze II" && desiredRank === "Super Sonic Legend") {
          total = "1147.47";}
  

          












        

        //bronze III
        else if (currentRank === "Bronze III" && desiredRank === "Bronze I") {
          total = "n/a";}
        else if (currentRank === "Bronze III" && desiredRank === "Bronze II") {
            total = "n/a";}
        else if (currentRank === "Bronze III" && desiredRank === "Bronze III") {
          total = "n/a";}
      
        else if (currentRank === "Bronze III" && desiredRank === "Silver I") {
          total = "9.21";}
      
        else if (currentRank === "Bronze III" && desiredRank === "Silver II") {
          total = "18.43";}
      
        else if (currentRank === "Bronze III" && desiredRank === "Silver III") {
          total = "27.65";}
      
        else if (currentRank === "Bronze III" && desiredRank === "Gold I") {
          total = "40.6";}
      
        else if (currentRank === "Bronze III" && desiredRank === "Gold II") {
          total = "53.54";}

        else if (currentRank === "Bronze III" && desiredRank === "Gold III") {
          total = "66.48";}

        else if (currentRank === "Bronze III" && desiredRank === "Platinum I") {
          total = "81.2";}


        else if (currentRank === "Bronze III" && desiredRank === "Platinum II") {
          total = "99.65";}


        else if (currentRank === "Bronze III" && desiredRank === "Platinum III") {
          total = "120.05";}

        else if (currentRank === "Bronze III" && desiredRank === "Diamond I") {
          total = "147.9";}

        else if (currentRank === "Bronze III" && desiredRank === "Diamond II") {
          total = "184.96";}

        else if (currentRank === "Bronze III" && desiredRank === "Diamond III") {
          total = "229.48";}


        else if (currentRank === "Bronze III" && desiredRank === "Champion I") {
          total = "277.71";}

          
        else if (currentRank === "Bronze III" && desiredRank === "Champion II") {
          total = "335.36";}

        else if (currentRank === "Bronze III" && desiredRank === "Champion III") {
          total = "406.12";}
          

        else if (currentRank === "Bronze III" && desiredRank === "Grand Champion I") {
          total = "501.02";}

        else if (currentRank === "Bronze III" && desiredRank === "Grand Champion II") {
          total = "659.39";}


        else if (currentRank === "Bronze III" && desiredRank === "Grand Champion III") {
          total = "856.96";}
  
          
        else if (currentRank === "Bronze III" && desiredRank === "Super Sonic Legend") {
          total = "1142.15";}
  
















        //Silver I
        else if (currentRank === "Silver I" && desiredRank === "Bronze I") {
          total = "n/a";}
        else if (currentRank === "Silver I" && desiredRank === "Bronze II") {
            total = "n/a";}
        else if (currentRank === "Silver I" && desiredRank === "Bronze III") {
          total = "n/a";}
      
        else if (currentRank === "Silver I" && desiredRank === "Silver I") {
          total = "n/a";}
      
        else if (currentRank === "Silver I" && desiredRank === "Silver II") {
          total = "9.21";}
      
        else if (currentRank === "Silver I" && desiredRank === "Silver III") {
          total = "18.43";}
      
        else if (currentRank === "Silver I" && desiredRank === "Gold I") {
          total = "31.37";}
      
        else if (currentRank === "Silver I" && desiredRank === "Gold II") {
          total = "44.32";}




        else if (currentRank === "Silver I" && desiredRank === "Gold III") {
          total = "57.26";}

        else if (currentRank === "Silver I" && desiredRank === "Platinum I") {
          total = "71.99";}


        else if (currentRank === "Silver I" && desiredRank === "Platinum II") {
          total = "90.43";}


        else if (currentRank === "Silver I" && desiredRank === "Platinum III") {
          total = "110.84";}

        else if (currentRank === "Silver I" && desiredRank === "Diamond I") {
          total = "138.69";}

        else if (currentRank === "Silver I" && desiredRank === "Diamond II") {
          total = "175.75";}

        else if (currentRank === "Silver I" && desiredRank === "Diamond III") {
          total = "220.27";}


        else if (currentRank === "Silver I" && desiredRank === "Champion I") {
          total = "268.5";}

          
        else if (currentRank === "Silver I" && desiredRank === "Champion II") {
          total = "326.15";}

        else if (currentRank === "Silver I" && desiredRank === "Champion III") {
          total = "396.91";}
          

        else if (currentRank === "Silver I" && desiredRank === "Grand Champion I") {
          total = "491.79";}

        else if (currentRank === "Silver I" && desiredRank === "Grand Champion II") {
          total = "650.17";}


        else if (currentRank === "Silver I" && desiredRank === "Grand Champion III") {
          total = "847.75";}
  
          
        else if (currentRank === "Silver I" && desiredRank === "Super Sonic Legend") {
          total = "1132.93";}
  

          





        //silverII

        else if (currentRank === "Silver II" && desiredRank === "Bronze I") {
          total = "n/a";}
        else if (currentRank === "Silver II" && desiredRank === "Bronze II") {
            total = "n/a";}
        else if (currentRank === "Silver II" && desiredRank === "Bronze III") {
          total = "n/a";}
      
        else if (currentRank === "Silver II" && desiredRank === "Silver I") {
          total = "n/a";}
      
        else if (currentRank === "Silver II" && desiredRank === "Silver II") {
          total = "n/a";}
      
        else if (currentRank === "Silver II" && desiredRank === "Silver III") {
          total = "9.21";}
      
        else if (currentRank === "Silver II" && desiredRank === "Gold I") {
          total = "22.16";}
      
        else if (currentRank === "Silver II" && desiredRank === "Gold II") {
          total = "35.11";}




        else if (currentRank === "Silver II" && desiredRank === "Gold III") {
          total = "48.05";}

        else if (currentRank === "Silver II" && desiredRank === "Platinum I") {
          total = "62.77";}


        else if (currentRank === "Silver II" && desiredRank === "Platinum II") {
          total = "81.22";}


        else if (currentRank === "Bronze II" && desiredRank === "Platinum III") {
          total = "101.62";}

        else if (currentRank === "Silver II" && desiredRank === "Diamond I") {
          total = "129.46";}

        else if (currentRank === "Silver II" && desiredRank === "Diamond II") {
          total = "166.53";}

        else if (currentRank === "Silver II" && desiredRank === "Diamond III") {
          total = "211.05";}


        else if (currentRank === "Silver II" && desiredRank === "Champion I") {
          total = "259.28";}

          
        else if (currentRank === "Silver II" && desiredRank === "Champion II") {
          total = "316.93";}

        else if (currentRank === "Silver II" && desiredRank === "Champion III") {
          total = "387.69";}
          

        else if (currentRank === "Silver II" && desiredRank === "Grand Champion I") {
          total = "482.58";}

        else if (currentRank === "Silver II" && desiredRank === "Grand Champion II") {
          total = "640.96";}


        else if (currentRank === "Silver II" && desiredRank === "Grand Champion III") {
          total = "838.53";}
  
          
        else if (currentRank === "Silver II" && desiredRank === "Super Sonic Legend") {
          total = "1123.72";}
  

          








          //silverIII


        
          else if (currentRank === "Silver III" && desiredRank === "Bronze I") {
            total = "n/a";}
          else if (currentRank === "Silver III" && desiredRank === "Bronze II") {
              total = "n/a";}
          else if (currentRank === "Silver III" && desiredRank === "Bronze III") {
            total = "n/a";}
        
          else if (currentRank === "Silver III" && desiredRank === "Silver I") {
            total = "n/a";}
        
          else if (currentRank === "Silver III" && desiredRank === "Silver II") {
            total = "n/a";}
        
          else if (currentRank === "Silver III" && desiredRank === "Silver III") {
            total = "n/a";}
        
          else if (currentRank === "Silver III" && desiredRank === "Gold I") {
            total = "12.95";}
        
          else if (currentRank === "Silver III" && desiredRank === "Gold II") {
            total = "25.89";}
  
  
  
  
          else if (currentRank === "Silver III" && desiredRank === "Gold III") {
            total = "38.84";}
  
          else if (currentRank === "Silver III" && desiredRank === "Platinum I") {
            total = "53.55";}
  
  
          else if (currentRank === "Silver III" && desiredRank === "Platinum II") {
            total = "72";}
  
  
          else if (currentRank === "Silver III" && desiredRank === "Platinum III") {
            total = "92.4";}
  
          else if (currentRank === "Silver III" && desiredRank === "Diamond I") {
            total = "120.25";}
  
          else if (currentRank === "Silver III" && desiredRank === "Diamond II") {
            total = "157.31";}
  
          else if (currentRank === "Silver III" && desiredRank === "Diamond III") {
            total = "201.83";}
  
  
          else if (currentRank === "Silver III" && desiredRank === "Champion I") {
            total = "250.07";}
  
            
          else if (currentRank === "Silver III" && desiredRank === "Champion II") {
            total = "307.72";}
  
          else if (currentRank === "Silver III" && desiredRank === "Champion III") {
            total = "378.47";}
            
  
          else if (currentRank === "Silver III" && desiredRank === "Grand Champion I") {
            total = "473.37";}
  
          else if (currentRank === "Silver III" && desiredRank === "Grand Champion II") {
            total = "631.74";}
  
  
          else if (currentRank === "Silver III" && desiredRank === "Grand Champion III") {
            total = "829.31";}
    
            
          else if (currentRank === "Silver III" && desiredRank === "Super Sonic Legend") {
            total = "1114.5";}
    
  
            

            




          //goldI


          else if (currentRank === "Gold I" && desiredRank === "Bronze I") {
            total = "n/a";}
          else if (currentRank === "Gold I" && desiredRank === "Bronze II") {
              total = "n/a";}
          else if (currentRank === "Gold I" && desiredRank === "Bronze III") {
            total = "n/a";}
        
          else if (currentRank === "Gold I" && desiredRank === "Silver I") {
            total = "n/a";}
        
          else if (currentRank === "Gold I" && desiredRank === "Silver II") {
            total = "n/a";}
        
          else if (currentRank === "Gold I" && desiredRank === "Silver III") {
            total = "n/a";}
        
          else if (currentRank === "Gold I" && desiredRank === "Gold I") {
            total = "n/a";}
        
          else if (currentRank === "Gold I" && desiredRank === "Gold II") {
            total = "12.95";}
  
  
  
  
          else if (currentRank === "Gold I" && desiredRank === "Gold III") {
            total = "25.89";}
  
          else if (currentRank === "Gold I" && desiredRank === "Platinum I") {
            total = "40.61";}
  
  
          else if (currentRank === "Gold I" && desiredRank === "Platinum II") {
            total = "59.06";}
  
  
          else if (currentRank === "Gold I" && desiredRank === "Platinum III") {
            total = "79.46";}
  
          else if (currentRank === "Gold I" && desiredRank === "Diamond I") {
            total = "107.3";}
  
          else if (currentRank === "Gold I" && desiredRank === "Diamond II") {
            total = "144.37";}
  
          else if (currentRank === "Gold I" && desiredRank === "Diamond III") {
            total = "188.89";}
  
  
          else if (currentRank === "Gold I" && desiredRank === "Champion I") {
            total = "237.12";}
  
            
          else if (currentRank === "Gold I" && desiredRank === "Champion II") {
            total = "294.77";}
  
          else if (currentRank === "Gold I" && desiredRank === "Champion III") {
            total = "365.53";}
            
  
          else if (currentRank === "Gold I" && desiredRank === "Grand Champion I") {
            total = "460.42";}
  
          else if (currentRank === "Gold I" && desiredRank === "Grand Champion II") {
            total = "618.79";}
  
  
          else if (currentRank === "Gold I" && desiredRank === "Grand Champion III") {
            total = "816.37";}
    
            
          else if (currentRank === "" && desiredRank === "Super Sonic Legend") {
            total = "1101.56";}
    
  
            

            









            //goldII

            else if (currentRank === "Gold II" && desiredRank === "Bronze I") {
              total = "n/a";}
            else if (currentRank === "Gold II" && desiredRank === "Bronze II") {
                total = "n/a";}
            else if (currentRank === "Gold II" && desiredRank === "Bronze III") {
              total = "n/a";}
          
            else if (currentRank === "Gold II" && desiredRank === "Silver I") {
              total = "n/a";}
          
            else if (currentRank === "Gold II" && desiredRank === "Silver II") {
              total = "n/a";}
          
            else if (currentRank === "Gold II" && desiredRank === "Silver III") {
              total = "n/a";}
          
            else if (currentRank === "Gold II" && desiredRank === "Gold I") {
              total = "n/a";}
          
            else if (currentRank === "Gold II" && desiredRank === "Gold II") {
              total = "n/a";}
    
    
    
    
            else if (currentRank === "Gold II" && desiredRank === "Gold III") {
              total = "12.95";}
    
            else if (currentRank === "Gold II" && desiredRank === "Platinum I") {
              total = "27.67";}
    
    
            else if (currentRank === "Gold II" && desiredRank === "Platinum II") {
              total = "46.11";}
    
    
            else if (currentRank === "Gold II" && desiredRank === "Platinum III") {
              total = "66.51";}
    
            else if (currentRank === "Gold II" && desiredRank === "Diamond I") {
              total = "94.36";}
    
            else if (currentRank === "Gold II" && desiredRank === "Diamond II") {
              total = "131.43";}
    
            else if (currentRank === "Gold II" && desiredRank === "Diamond III") {
              total = "175.94";}
    
    
            else if (currentRank === "Gold II" && desiredRank === "Champion I") {
              total = "224.18";}
    
              
            else if (currentRank === "Gold II" && desiredRank === "Champion II") {
              total = "281.83";}
    
            else if (currentRank === "Gold II" && desiredRank === "Champion III") {
              total = "352.58";}
              
    
            else if (currentRank === "Gold II" && desiredRank === "Grand Champion I") {
              total = "447.47";}
    
            else if (currentRank === "Gold II" && desiredRank === "Grand Champion II") {
              total = "605.85";}
    
    
            else if (currentRank === "Gold II" && desiredRank === "Grand Champion III") {
              total = "803.42";}
      
              
            else if (currentRank === "Gold II" && desiredRank === "Super Sonic Legend") {
              total = "1088.61";}
      
    
              

            //goldIII

            else if (currentRank === "Gold III" && desiredRank === "Bronze I") {
              total = "n/a";}
            else if (currentRank === "Gold III" && desiredRank === "Bronze II") {
                total = "n/a";}
            else if (currentRank === "Gold III" && desiredRank === "Bronze III") {
              total = "n/a";}
          
            else if (currentRank === "Gold III" && desiredRank === "Silver I") {
              total = "n/a";}
          
            else if (currentRank === "Gold III" && desiredRank === "Silver II") {
              total = "n/a";}
          
            else if (currentRank === "Gold III" && desiredRank === "Silver III") {
              total = "n/a";}
          
            else if (currentRank === "Gold III" && desiredRank === "Gold I") {
              total = "n/a";}
          
            else if (currentRank === "Gold III" && desiredRank === "Gold II") {
              total = "n/a";}
    
    
    
    
            else if (currentRank === "Gold III" && desiredRank === "Gold III") {
              total = "n/a";}
    
            else if (currentRank === "Gold III" && desiredRank === "Platinum I") {
              total = "14.72";}
    
    
            else if (currentRank === "Gold III" && desiredRank === "Platinum II") {
              total = "33.17";}
    
    
            else if (currentRank === "Gold III" && desiredRank === "Platinum III") {
              total = "53.57";}
    
            else if (currentRank === "Gold III" && desiredRank === "Diamond I") {
              total = "81.41";}
    
            else if (currentRank === "Gold III" && desiredRank === "Diamond II") {
              total = "118.48";}
    
            else if (currentRank === "Gold III" && desiredRank === "Diamond III") {
              total = "163";}
    
    
            else if (currentRank === "Gold III" && desiredRank === "Champion I") {
              total = "211.23";}
    
              
            else if (currentRank === "Gold III" && desiredRank === "Champion II") {
              total = "268.88";}
    
            else if (currentRank === "Gold III" && desiredRank === "Champion III") {
              total = "339.63";}
              
    
            else if (currentRank === "Gold III" && desiredRank === "Grand Champion I") {
              total = "434.53";}
    
            else if (currentRank === "Gold III" && desiredRank === "Grand Champion II") {
              total = "592.9";}
    
    
            else if (currentRank === "Gold III" && desiredRank === "Grand Champion III") {
              total = "790.47";}
      
              
            else if (currentRank === "Gold III" && desiredRank === "Super Sonic Legend") {
              total = "1075.67";}
      
    
              

              
            

            







           //platinum I

           else if (currentRank === "Platinum I" && desiredRank === "Bronze I") {
            total = "n/a";}
          else if (currentRank === "Platinum I" && desiredRank === "Bronze II") {
              total = "n/a";}
          else if (currentRank === "Platinum I" && desiredRank === "Bronze III") {
            total = "n/a";}
        
          else if (currentRank === "Platinum I" && desiredRank === "Silver I") {
            total = "n/a";}
        
          else if (currentRank === "Platinum I" && desiredRank === "Silver II") {
            total = "n/a";}
        
          else if (currentRank === "Platinum I" && desiredRank === "Silver III") {
            total = "n/a";}
        
          else if (currentRank === "Platinum I" && desiredRank === "Gold I") {
            total = "n/a";}
        
          else if (currentRank === "Platinum I" && desiredRank === "Gold II") {
            total = "n/a";}
  
  
  
  
          else if (currentRank === "Platinum I" && desiredRank === "Gold III") {
            total = "n/a";}
  
          else if (currentRank === "Platinum I" && desiredRank === "Platinum I") {
            total = "n/a";}
  
  
          else if (currentRank === "Platinum I" && desiredRank === "Platinum II") {
            total = "18.45";}
  
  
          else if (currentRank === "Platinum I" && desiredRank === "Platinum III") {
            total = "38.85";}
  
          else if (currentRank === "Platinum I" && desiredRank === "Diamond I") {
            total = "66.7";}
  
          else if (currentRank === "Platinum I" && desiredRank === "Diamond II") {
            total = "103.76";}
  
          else if (currentRank === "Platinum I" && desiredRank === "Diamond III") {
            total = "148.28";}
  
  
          else if (currentRank === "Platinum I" && desiredRank === "Champion I") {
            total = "196.51";}
  
            
          else if (currentRank === "Platinum I" && desiredRank === "Champion II") {
            total = "254.16";}
  
          else if (currentRank === "Platinum I" && desiredRank === "Champion III") {
            total = "324.92";}
            
  
          else if (currentRank === "Platinum I" && desiredRank === "Grand Champion I") {
            total = "419.82";}
  
          else if (currentRank === "Platinum I" && desiredRank === "Grand Champion II") {
            total = "578.19";}
  
  
          else if (currentRank === "Platinum I" && desiredRank === "Grand Champion III") {
            total = "578.19";}
    
            
          else if (currentRank === "Platinum I" && desiredRank === "Super Sonic Legend") {
            total = "1060.95";}
    
  
            

            












          //platinum II

          else if (currentRank === "Platinum II" && desiredRank === "Bronze I") {
            total = "n/a";}
          else if (currentRank === "Platinum II" && desiredRank === "Bronze II") {
              total = "n/a";}
          else if (currentRank === "Platinum II" && desiredRank === "Bronze III") {
            total = "n/a";}
        
          else if (currentRank === "Platinum II" && desiredRank === "Silver I") {
            total = "n/a";}
        
          else if (currentRank === "Platinum II" && desiredRank === "Silver II") {
            total = "n/a";}
        
          else if (currentRank === "Platinum II" && desiredRank === "Silver III") {
            total = "n/a";}
        
          else if (currentRank === "Platinum II" && desiredRank === "Gold I") {
            total = "n/a";}
        
          else if (currentRank === "Platinum II" && desiredRank === "Gold II") {
            total = "n/a";}
  
  
  
  
          else if (currentRank === "Platinum II" && desiredRank === "Gold III") {
            total = "n/a";}
  
          else if (currentRank === "" && desiredRank === "Platinum I") {
            total = "n/a";}
  
  
          else if (currentRank === "Platinum II" && desiredRank === "Platinum II") {
            total = "n/a";}
  
  
          else if (currentRank === "Platinum II" && desiredRank === "Platinum III") {
            total = "20.4";}
  
          else if (currentRank === "Platinum II" && desiredRank === "Diamond I") {
            total = "48.25";}
  
          else if (currentRank === "Platinum II" && desiredRank === "Diamond II") {
            total = "85.31";}
  
          else if (currentRank === "Platinum II" && desiredRank === "Diamond III") {
            total = "129.83";}
  
  
          else if (currentRank === "Platinum II" && desiredRank === "Champion I") {
            total = "178.07";}
  
            
          else if (currentRank === "Platinum II" && desiredRank === "Champion II") {
            total = "235.71";}
  
          else if (currentRank === "Platinum II" && desiredRank === "Champion III") {
            total = "306.48";}
            
  
          else if (currentRank === "Platinum II" && desiredRank === "Grand Champion I") {
            total = "401.36";}
  
          else if (currentRank === "Platinum II" && desiredRank === "Grand Champion II") {
            total = "559.74";}
  
  
          else if (currentRank === "Platinum II" && desiredRank === "Grand Champion III") {
            total = "757.32";}
    
            
          else if (currentRank === "Platinum II" && desiredRank === "Super Sonic Legend") {
            total = "1042.5";}
    
  
            
            














          //platinum III


          else if (currentRank === "Platinum III" && desiredRank === "Bronze I") {
            total = "n/a";}
          else if (currentRank === "Platinum III" && desiredRank === "Bronze II") {
              total = "n/a";}
          else if (currentRank === "Platinum III" && desiredRank === "Bronze III") {
            total = "n/a";}
        
          else if (currentRank === "Platinum III" && desiredRank === "Silver I") {
            total = "n/a";}
        
          else if (currentRank === "Platinum III" && desiredRank === "Silver II") {
            total = "n/a";}
        
          else if (currentRank === "Platinum III" && desiredRank === "Silver III") {
            total = "n/a";}
        
          else if (currentRank === "Platinum III" && desiredRank === "Gold I") {
            total = "n/a";}
        
          else if (currentRank === "Platinum III" && desiredRank === "Gold II") {
            total = "n/a";}
  
  
  
  
          else if (currentRank === "Platinum III" && desiredRank === "Gold III") {
            total = "n/a";}
  
          else if (currentRank === "Platinum III" && desiredRank === "Platinum I") {
            total = "n/a";}
  
  
          else if (currentRank === "Platinum III" && desiredRank === "Platinum II") {
            total = "n/a";}
  
  
          else if (currentRank === "Platinum III" && desiredRank === "Platinum III") {
            total = "n/a";}
  
          else if (currentRank === "Platinum III" && desiredRank === "Diamond I") {
            total = "27.85";}
  
          else if (currentRank === "Platinum III" && desiredRank === "Diamond II") {
            total = "64.91";}
  
          else if (currentRank === "Platinum III" && desiredRank === "Diamond III") {
            total = "109.43";}
  
  
          else if (currentRank === "Platinum III" && desiredRank === "Champion I") {
            total = "157.66";}
  
            
          else if (currentRank === "Platinum III" && desiredRank === "Champion II") {
            total = "215.31";}
  
          else if (currentRank === "Platinum III" && desiredRank === "Champion III") {
            total = "286.07";}
            
  
          else if (currentRank === "Platinum III" && desiredRank === "Grand Champion I") {
            total = "380.96";}
  
          else if (currentRank === "Platinum III" && desiredRank === "Grand Champion II") {
            total = "539.33";}
  
  
          else if (currentRank === "Platinum III" && desiredRank === "Grand Champion III") {
            total = "736.91";}
    
            
          else if (currentRank === "Platinum III" && desiredRank === "Super Sonic Legend") {
            total = "1022.1";}
    
  
            

            















          //diamond I

          else if (currentRank === "Diamond I" && desiredRank === "Bronze I") {
            total = "n/a";}
          else if (currentRank === "Diamond I" && desiredRank === "Bronze II") {
              total = "n/a";}
          else if (currentRank === "Diamond I" && desiredRank === "Bronze III") {
            total = "n/a";}
        
          else if (currentRank === "Diamond I" && desiredRank === "Silver I") {
            total = "n/a";}
        
          else if (currentRank === "Diamond I" && desiredRank === "Silver II") {
            total = "n/a";}
        
          else if (currentRank === "Diamond I" && desiredRank === "Silver III") {
            total = "n/a";}
        
          else if (currentRank === "Diamond I" && desiredRank === "Gold I") {
            total = "n/a";}
        
          else if (currentRank === "Diamond I" && desiredRank === "Gold II") {
            total = "n/a";}
  
  
  
  
          else if (currentRank === "Diamond I" && desiredRank === "Gold III") {
            total = "n/a";}
  
          else if (currentRank === "Diamond I" && desiredRank === "Platinum I") {
            total = "n/a";}
  
  
          else if (currentRank === "Diamond I" && desiredRank === "Platinum II") {
            total = "n/a";}
  
  
          else if (currentRank === "Diamond I" && desiredRank === "Platinum III") {
            total = "n/a";}
  
          else if (currentRank === "Diamond I" && desiredRank === "Diamond I") {
            total = "n/a";}
  
          else if (currentRank === "Diamond I" && desiredRank === "Diamond II") {
            total = "37.06";}
  
          else if (currentRank === "Diamond I" && desiredRank === "Diamond III") {
            total = "81.58";}
  
  
          else if (currentRank === "Diamond I" && desiredRank === "Champion I") {
            total = "129.81";}
  
            
          else if (currentRank === "Diamond I" && desiredRank === "Champion II") {
            total = "187.47";}
  
          else if (currentRank === "Diamond I" && desiredRank === "Champion III") {
            total = "258.22";}
            
  
          else if (currentRank === "Diamond I" && desiredRank === "Grand Champion I") {
            total = "353.12";}
  
          else if (currentRank === "Diamond I" && desiredRank === "Grand Champion II") {
            total = "511.49";}
  
  
          else if (currentRank === "Diamond I" && desiredRank === "Grand Champion III") {
            total = "709.06";}
    
            
          else if (currentRank === "Diamond I" && desiredRank === "Super Sonic Legend") {
            total = "994.25";}
    
  
            

            












          //diamond II


          else if (currentRank === "Diamond II" && desiredRank === "Bronze I") {
            total = "n/a";}
          else if (currentRank === "Diamond II" && desiredRank === "Bronze II") {
              total = "n/a";}
          else if (currentRank === "Diamond II" && desiredRank === "Bronze III") {
            total = "n/a";}
        
          else if (currentRank === "Diamond II" && desiredRank === "Silver I") {
            total = "n/a";}
        
          else if (currentRank === "Diamond II" && desiredRank === "Silver II") {
            total = "n/a";}
        
          else if (currentRank === "Diamond II" && desiredRank === "Silver III") {
            total = "n/a";}
        
          else if (currentRank === "Diamond II" && desiredRank === "Gold I") {
            total = "n/a";}
        
          else if (currentRank === "Diamond II" && desiredRank === "Gold II") {
            total = "n/a";}
  
  
  
  
          else if (currentRank === "Diamond II" && desiredRank === "Gold III") {
            total = "n/a";}
  
          else if (currentRank === "Diamond II" && desiredRank === "Platinum I") {
            total = "n/a";}
  
  
          else if (currentRank === "Diamond II" && desiredRank === "Platinum II") {
            total = "n/a";}
  
  
          else if (currentRank === "Diamond II" && desiredRank === "Platinum III") {
            total = "n/a";}
  
          else if (currentRank === "Diamond II" && desiredRank === "Diamond I") {
            total = "n/a";}
  
          else if (currentRank === "Diamond II" && desiredRank === "Diamond II") {
            total = "n/a";}
  
          else if (currentRank === "Diamond II" && desiredRank === "Diamond III") {
            total = "44.52";}
  
          else if (currentRank === "Diamond II" && desiredRank === "Champion I") {
            total = "92.75";}
            
          else if (currentRank === "Diamond II" && desiredRank === "Champion II") {
            total = "92.75";}
  
          else if (currentRank === "Diamond II" && desiredRank === "Champion III") {
            total = "221.16";}
            
  
          else if (currentRank === "Diamond II" && desiredRank === "Grand Champion I") {
            total = "316.06";}
  
          else if (currentRank === "Diamond II" && desiredRank === "Grand Champion II") {
            total = "474.43";}
  
  
          else if (currentRank === "Diamond II" && desiredRank === "Grand Champion III") {
            total = "672";}
    
            
          else if (currentRank === "Diamond II" && desiredRank === "Super Sonic Legend") {
            total = "957.19";}
    
  
            

            




















          //Diamond III



          else if (currentRank === "Diamond III" && desiredRank === "Bronze I") {
            total = "n/a";}
          else if (currentRank === "Diamond III" && desiredRank === "Bronze II") {
              total = "n/a";}
          else if (currentRank === "Diamond III" && desiredRank === "Bronze III") {
            total = "n/a";}
        
          else if (currentRank === "Diamond III" && desiredRank === "Silver I") {
            total = "n/a";}
        
          else if (currentRank === "Diamond III" && desiredRank === "Silver II") {
            total = "n/a";}
        
          else if (currentRank === "Diamond III" && desiredRank === "Silver III") {
            total = "n/a";}
        
          else if (currentRank === "Diamond III" && desiredRank === "Gold I") {
            total = "n/a";}
        
          else if (currentRank === "Diamond III" && desiredRank === "Gold II") {
            total = "n/a";}
  
  
  
  
          else if (currentRank === "Diamond III" && desiredRank === "Gold III") {
            total = "n/a";}
  
          else if (currentRank === "Diamond III" && desiredRank === "Platinum I") {
            total = "n/a";}
  
  
          else if (currentRank === "Diamond III" && desiredRank === "Platinum II") {
            total = "n/a";}
  
  
          else if (currentRank === "Diamond III" && desiredRank === "Platinum III") {
            total = "n/a";}
  
          else if (currentRank === "Diamond III" && desiredRank === "Diamond I") {
            total = "n/a";}
  
          else if (currentRank === "Diamond III" && desiredRank === "Diamond II") {
            total = "n/a";}
  
          else if (currentRank === "Diamond III" && desiredRank === "Diamond III") {
            total = "n/a";}
  
  
          else if (currentRank === "Diamond III" && desiredRank === "Champion I") {
            total = "48.24";}
  
            
          else if (currentRank === "Diamond III" && desiredRank === "Champion II") {
            total = "105.88";}
  
          else if (currentRank === "Diamond III" && desiredRank === "Champion III") {
            total = "176.64";}
            
  
          else if (currentRank === "Diamond III" && desiredRank === "Grand Champion I") {
            total = "271.53";}
  
          else if (currentRank === "Diamond III" && desiredRank === "Grand Champion II") {
            total = "429.9";}
  
  
          else if (currentRank === "Diamond III" && desiredRank === "Grand Champion III") {
            total = "627.48";}
    
            
          else if (currentRank === "Diamond III" && desiredRank === "Super Sonic Legend") {
            total = "912.67";}
    
  
            

            















          ///champion I


          else if (currentRank === "Champion I" && desiredRank === "Bronze I") {
            total = "n/a";}
          else if (currentRank === "Champion I" && desiredRank === "Bronze II") {
              total = "n/a";}
          else if (currentRank === "Champion I" && desiredRank === "Bronze III") {
            total = "n/a";}
        
          else if (currentRank === "Champion I" && desiredRank === "Silver I") {
            total = "n/a";}
        
          else if (currentRank === "Champion I" && desiredRank === "Silver II") {
            total = "n/a";}
        
          else if (currentRank === "Champion I" && desiredRank === "Silver III") {
            total = "n/a";}
        
          else if (currentRank === "Champion I" && desiredRank === "Gold I") {
            total = "n/a";}
        
          else if (currentRank === "Champion I" && desiredRank === "Gold II") {
            total = "n/a";}
  
  
  
  
          else if (currentRank === "Champion I" && desiredRank === "Gold III") {
            total = "n/a";}
  
          else if (currentRank === "Champion I" && desiredRank === "Platinum I") {
            total = "n/a";}
  
  
          else if (currentRank === "Champion I" && desiredRank === "Platinum II") {
            total = "n/a";}
  
  
          else if (currentRank === "Champion I" && desiredRank === "Platinum III") {
            total = "n/a";}
  
          else if (currentRank === "Champion I" && desiredRank === "Diamond I") {
            total = "n/a";}
  
          else if (currentRank === "Champion I" && desiredRank === "Diamond II") {
            total = "n/a";}
  
          else if (currentRank === "Champion I" && desiredRank === "Diamond III") {
            total = "n/a";}
  
  
          else if (currentRank === "Champion I" && desiredRank === "Champion I") {
            total = "n/a";}
  
            
          else if (currentRank === "Champion I" && desiredRank === "Champion II") {
            total = "57.65";}
  
          else if (currentRank === "Champion I" && desiredRank === "Champion III") {
            total = "128.41";}
            
  
          else if (currentRank === "Champion I" && desiredRank === "Grand Champion I") {
            total = "223.3";}
  
          else if (currentRank === "Champion I" && desiredRank === "Grand Champion II") {
            total = "381.68";}
  
  
          else if (currentRank === "Champion I" && desiredRank === "Grand Champion III") {
            total = "579.25";}
    
            
          else if (currentRank === "Champion I" && desiredRank === "Super Sonic Legend") {
            total = "864.43";}
    
  
            

            




          //champion II


          else if (currentRank === "Champion II" && desiredRank === "Bronze I") {
            total = "n/a";}
          else if (currentRank === "Champion II" && desiredRank === "Bronze II") {
              total = "n/a";}
          else if (currentRank === "Champion II" && desiredRank === "Bronze III") {
            total = "n/a";}
        
          else if (currentRank === "Champion II" && desiredRank === "Silver I") {
            total = "n/a";}
        
          else if (currentRank === "Champion II" && desiredRank === "Silver II") {
            total = "n/a";}
        
          else if (currentRank === "Champion II" && desiredRank === "Silver III") {
            total = "n/a";}
        
          else if (currentRank === "Champion II" && desiredRank === "Gold I") {
            total = "n/a";}
        
          else if (currentRank === "Champion II" && desiredRank === "Gold II") {
            total = "n/a";}
  
  
  
  
          else if (currentRank === "Champion II" && desiredRank === "Gold III") {
            total = "n/a";}
  
          else if (currentRank === "Champion II" && desiredRank === "Platinum I") {
            total = "n/a";}
  
  
          else if (currentRank === "Champion II" && desiredRank === "Platinum II") {
            total = "n/a";}
  
  
          else if (currentRank === "Champion II" && desiredRank === "Platinum III") {
            total = "n/a";}
  
          else if (currentRank === "Champion II" && desiredRank === "Diamond I") {
            total = "n/a";}
  
          else if (currentRank === "Champion II" && desiredRank === "Diamond II") {
            total = "n/a";}
  
          else if (currentRank === "Champion II" && desiredRank === "Diamond III") {
            total = "n/a";}
  
  
          else if (currentRank === "Champion II" && desiredRank === "Champion I") {
            total = "n/a";}
  
            
          else if (currentRank === "Champion II" && desiredRank === "Champion II") {
            total = "n/a";}
  
          else if (currentRank === "Champion II" && desiredRank === "Champion III") {
            total = "70.76";}
            
  
          else if (currentRank === "Champion II" && desiredRank === "Grand Champion I") {
            total = "165.65";}
  
          else if (currentRank === "Champion II" && desiredRank === "Grand Champion II") {
            total = "324.03";}
  
  
          else if (currentRank === "Champion II" && desiredRank === "Grand Champion III") {
            total = "521.6";}
    
            
          else if (currentRank === "Champion II" && desiredRank === "Super Sonic Legend") {
            total = "806.79";}
    
  
            

            






          //champion III


          else if (currentRank === "Champion III" && desiredRank === "Bronze I") {
            total = "n/a";}
          else if (currentRank === "Champion III" && desiredRank === "Bronze II") {
              total = "n/a";}
          else if (currentRank === "Champion III" && desiredRank === "Bronze III") {
            total = "n/a";}
        
          else if (currentRank === "Champion III" && desiredRank === "Silver I") {
            total = "n/a";}
        
          else if (currentRank === "Champion III" && desiredRank === "Silver II") {
            total = "n/a";}
        
          else if (currentRank === "Champion III" && desiredRank === "Silver III") {
            total = "n/a";}
        
          else if (currentRank === "Champion III" && desiredRank === "Gold I") {
            total = "n/a";}
        
          else if (currentRank === "Champion III" && desiredRank === "Gold II") {
            total = "n/a";}
  
  
  
  
          else if (currentRank === "Champion III" && desiredRank === "Gold III") {
            total = "n/a";}
  
          else if (currentRank === "Champion III" && desiredRank === "Platinum I") {
            total = "n/a";}
  
  
          else if (currentRank === "Champion III" && desiredRank === "Platinum II") {
            total = "n/a";}
  
  
          else if (currentRank === "Champion III" && desiredRank === "Platinum III") {
            total = "n/a";}
  
          else if (currentRank === "Champion III" && desiredRank === "Diamond I") {
            total = "n/a";}
  
          else if (currentRank === "Champion III" && desiredRank === "Diamond II") {
            total = "n/a";}
  
          else if (currentRank === "Champion III" && desiredRank === "Diamond III") {
            total = "n/a";}
  
  
          else if (currentRank === "Champion III" && desiredRank === "Champion I") {
            total = "n/a";}
  
            
          else if (currentRank === "Champion III" && desiredRank === "Champion II") {
            total = "n/a";}
  
          else if (currentRank === "Champion III" && desiredRank === "Champion III") {
            total = "n/a";}
            
  
          else if (currentRank === "Champion III" && desiredRank === "Grand Champion I") {
            total = "94.89";}
  
          else if (currentRank === "Champion III" && desiredRank === "Grand Champion II") {
            total = "253.27";}
  
  
          else if (currentRank === "Champion III" && desiredRank === "Grand Champion III") {
            total = "450.84";}
    
            
          else if (currentRank === "Champion III" && desiredRank === "Super Sonic Legend") {
            total = "736.03";}
    
  
            

            



          ///grand champion I

          else if (currentRank === "Grand Champion I" && desiredRank === "Bronze I") {
            total = "n/a";}
          else if (currentRank === "Grand Champion I" && desiredRank === "Bronze II") {
              total = "n/a";}
          else if (currentRank === "Grand Champion I" && desiredRank === "Bronze III") {
            total = "n/a";}
        
          else if (currentRank === "Grand Champion I" && desiredRank === "Silver I") {
            total = "n/a";}
        
          else if (currentRank === "Grand Champion I" && desiredRank === "Silver II") {
            total = "n/a";}
        
          else if (currentRank === "Grand Champion I" && desiredRank === "Silver III") {
            total = "n/a";}
        
          else if (currentRank === "Grand Champion I" && desiredRank === "Gold I") {
            total = "n/a";}
        
          else if (currentRank === "Grand Champion I" && desiredRank === "Gold II") {
            total = "n/a";}
  
  
  
  
          else if (currentRank === "Grand Champion I" && desiredRank === "Gold III") {
            total = "n/a";}
  
          else if (currentRank === "Grand Champion I" && desiredRank === "Platinum I") {
            total = "n/a";}
  
  
          else if (currentRank === "Grand Champion I" && desiredRank === "Platinum II") {
            total = "n/a";}
  
  
          else if (currentRank === "Grand Champion I" && desiredRank === "Platinum III") {
            total = "n/a";}
  
          else if (currentRank === "Grand Champion I" && desiredRank === "Diamond I") {
            total = "n/a";}
  
          else if (currentRank === "Grand Champion I" && desiredRank === "Diamond II") {
            total = "n/a";}
  
          else if (currentRank === "Grand Champion I" && desiredRank === "Diamond III") {
            total = "n/a";}
  
  
          else if (currentRank === "Grand Champion I" && desiredRank === "Champion I") {
            total = "n/a";}
  
            
          else if (currentRank === "Grand Champion I" && desiredRank === "Champion II") {
            total = "n/a";}
  
          else if (currentRank === "Grand Champion I" && desiredRank === "Champion III") {
            total = "n/a";}
            
  
          else if (currentRank === "Grand Champion I" && desiredRank === "Grand Champion I") {
            total = "n/a";}
  
          else if (currentRank === "Grand Champion I" && desiredRank === "Grand Champion II") {
            total = "158.37";}
  
  
          else if (currentRank === "Grand Champion I" && desiredRank === "Grand Champion III") {
            total = "355.95";}
    
            
          else if (currentRank === "Grand Champion I" && desiredRank === "Super Sonic Legend") {
            total = "641.14";}
    
  
            

            








            //grand champion II


            else if (currentRank === "Grand Champion II" && desiredRank === "Bronze I") {
              total = "n/a";}
            else if (currentRank === "Grand Champion II" && desiredRank === "Bronze II") {
                total = "n/a";}
            else if (currentRank === "Grand Champion II" && desiredRank === "Bronze III") {
              total = "n/a";}
          
            else if (currentRank === "Grand Champion II" && desiredRank === "Silver I") {
              total = "n/a";}
          
            else if (currentRank === "Grand Champion II" && desiredRank === "Silver II") {
              total = "n/a";}
          
            else if (currentRank === "Grand Champion II" && desiredRank === "Silver III") {
              total = "n/a";}
          
            else if (currentRank === "Grand Champion II" && desiredRank === "Gold I") {
              total = "n/a";}
          
            else if (currentRank === "Grand Champion II" && desiredRank === "Gold II") {
              total = "n/a";}
    
    
    
    
            else if (currentRank === "Grand Champion II" && desiredRank === "Gold III") {
              total = "n/a";}
    
            else if (currentRank === "Grand Champion II" && desiredRank === "Platinum I") {
              total = "n/a";}
    
    
            else if (currentRank === "Grand Champion II" && desiredRank === "Platinum II") {
              total = "n/a";}
    
    
            else if (currentRank === "Grand Champion II" && desiredRank === "Platinum III") {
              total = "n/a";}
    
            else if (currentRank === "Grand Champion II" && desiredRank === "Diamond I") {
              total = "n/a";}
    
            else if (currentRank === "Grand Champion II" && desiredRank === "Diamond II") {
              total = "n/a";}
    
            else if (currentRank === "Grand Champion II" && desiredRank === "Diamond III") {
              total = "n/a";}
    
    
            else if (currentRank === "Grand Champion II" && desiredRank === "Champion I") {
              total = "n/a";}
    
              
            else if (currentRank === "Grand Champion II" && desiredRank === "Champion II") {
              total = "n/a";}
    
            else if (currentRank === "Grand Champion II" && desiredRank === "Champion III") {
              total = "n/a";}
              
    
            else if (currentRank === "Grand Champion II" && desiredRank === "Grand Champion I") {
              total = "n/a";}
    
            else if (currentRank === "Grand Champion II" && desiredRank === "Grand Champion II") {
              total = "n/a";}
    
    
            else if (currentRank === "Grand Champion II" && desiredRank === "Grand Champion III") {
              total = "197.57";}
      
              
            else if (currentRank === "Grand Champion II" && desiredRank === "Super Sonic Legend") {
              total = "482.77";}
      
    
              

              







           //grande champion III






          



           else if (currentRank === "Grand Champion III" && desiredRank === "Bronze I") {
            total = "n/a";}
          else if (currentRank === "Grand Champion III" && desiredRank === "Bronze II") {
              total = "n/a";}
          else if (currentRank === "Grand Champion III" && desiredRank === "Bronze III") {
            total = "n/a";}
        
          else if (currentRank === "Grand Champion III" && desiredRank === "Silver I") {
            total = "n/a";}
        
          else if (currentRank === "Grand Champion III" && desiredRank === "Silver II") {
            total = "n/a";}
        
          else if (currentRank === "Grand Champion III" && desiredRank === "Silver III") {
            total = "n/a";}
        
          else if (currentRank === "Grand Champion III" && desiredRank === "Gold I") {
            total = "n/a";}
        
          else if (currentRank === "Grand Champion III" && desiredRank === "Gold II") {
            total = "n/a";}
  
  
  
  
          else if (currentRank === "Grand Champion III" && desiredRank === "Gold III") {
            total = "n/a";}
  
          else if (currentRank === "Grand Champion III" && desiredRank === "Platinum I") {
            total = "n/a";}
  
  
          else if (currentRank === "Grand Champion III" && desiredRank === "Platinum II") {
            total = "n/a";}
  
  
          else if (currentRank === "Grand Champion III" && desiredRank === "Platinum III") {
            total = "n/a";}
  
          else if (currentRank === "Grand Champion III" && desiredRank === "Diamond I") {
            total = "n/a";}
  
          else if (currentRank === "Grand Champion III" && desiredRank === "Diamond II") {
            total = "n/a";}
  
          else if (currentRank === "Grand Champion III" && desiredRank === "Diamond III") {
            total = "n/a";}
  
  
          else if (currentRank === "Grand Champion III" && desiredRank === "Champion I") {
            total = "283.03";}
  
            
          else if (currentRank === "Grand Champion III" && desiredRank === "Champion II") {
            total = "n/a";}
  
          else if (currentRank === "Grand Champion III" && desiredRank === "Champion III") {
            total = "n/a";}
            
  
          else if (currentRank === "Grand Champion III" && desiredRank === "Grand Champion I") {
            total = "n/a";}
  
          else if (currentRank === "Grand Champion III" && desiredRank === "Grand Champion II") {
            total = "n/a";}
  
  
          else if (currentRank === "Grand Champion III" && desiredRank === "Grand Champion III") {
            total = "n/a";}
    
            
          else if (currentRank === "Grand Champion III" && desiredRank === "Super Sonic Legend") {
            total = "285.19";}
    
  
            

            








  
            
          

        else {
          total = "n/a";
        }
        if (total === "n/a") {
          alert("Please provide a valid rank and do not try to break the website.");
        }
      
        card.innerHTML = `<h2>Total: ${total}</h2>`;
        document.querySelector("#paypal-payment-button").value = total
      });






 

      
    paypal.Buttons({
      style: {
        color: "blue",
        shape: "pill",
      },
      createOrder: function (data, actions) {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: document.querySelector("#paypal-payment-button").value,
              },
            },
          ],
        });
      },
      onApprove: function (data, actions) {
        return actions.order.capture().then(function (details) {
          console.log(details);
          window.location.replace("/payment/success/success.html");
        });
      },
      onCancel: function (data) {
        window.location.replace("/payment/cancel/cancel.html");
      },
    }).render("#paypal-payment-button");



        //disabling the next button if the user hasn't calculated yet

        //const calculateButton = document.getElementById("calculate-button");
        //const nextButton = document.getElementById("next-button");

        //nextButton.disabled = true; // Initially disabling the next button

        //continueBtn.addEventListener("click", function() {
          //nextButton.disabled = false; // Enabling the next button when the calculate button is clicked
        //});

        //nextButton.addEventListener("click", function() {
          //if (continueBtn.disabled) {
            //alert("Please calculate before proceeding!"); // Displaying the alert message if calculate button is not clicked before the next button
            //return false;
          //}
        //});



        //const nextButton = document.getElementById("next-button");
        //let hasCalculated = false;
        
        //nextButton.disabled = true; // Initially disabling the next button
        
        //continueBtn.addEventListener("click", function() {
          //hasCalculated = true; // Updating the variable to indicate that the user has calculated
          //nextButton.disabled = false; // Enabling the next button when the calculate button is clicked
          //alert("yes it works");
        //});
        
        //nextButton.addEventListener("click", function() {
          //if (!hasCalculated) {
            //alert("Please calculate before proceeding!"); // Displaying the alert message if calculate button is not clicked before the next button
            //console.log("it works here")
            //return false;
        
          //}
        //});








        
