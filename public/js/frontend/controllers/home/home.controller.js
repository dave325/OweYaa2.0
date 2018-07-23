(function(){
//Injector will protect against minification
homeCtrl.$inject = ['$scope','$uibModal', '$http', '$window'];
function homeCtrl($scope,$uibModal, $http, $window) {
    var vm = this;
    // Need to target properly in views
    vm.boxes = {
      veterans:{
        box1 :{
            name: 'Step 1',
            img: 'assets/images/Computer.PNG',
            header: 'Create a Profile',
            para: 'Create your profile so we can understand what your needs are.'
        },
        box2 :{
            name: 'Step 2',
            img: 'assets/images/signUpIcon.png',
            header: 'Work on Career Plan & Courses',
            para: 'Complete the career development steps and assigned coursework in your personalized career plan to prep you for the job market'
        },
        box3 :{
            name: 'Step 3',
            img: 'assets/images/hands.PNG',
            header: 'Get Matched with a Company',
            para: 'Get matched to internship projects to demonstrate and strengthen your skills.'
        },

        box4 :{
            name: 'Step 4',
            img: 'assets/images/desk.png',
            header: 'Start Internship',
            para: 'Work on your remote internship from the comfort of your home. Deliver the completed project to your project manager and add the completed skills to your profile resume. And Shine!'
        }
      },
      companies:{

        box1 :{
            name: 'Step 1',
            img: 'assets/images/compstep1.png',
            header: 'Create a Profile',
            para: 'Create your profile so we can understand what your needs are.'
        },
        box2 :{
            name: 'Step 2',
            img: 'assets/images/compstep2.png',
            header: 'Work on Career Plan & Courses',
            para: 'Complete the career development steps and assigned coursework in your personalized career plan to prep you for the job market'
        },
        box3 :{
            name: 'Step 3',
            img: 'assets/images/compstep3.png',
            header: 'Get Matched with a Company',
            para: 'Get matched to internship projects to demonstrate and strengthen your skills.'
        },

        box4 :{
            name: 'Step 4',
            img: 'assets/images/hello.png',
            header: 'Start Internship',
            para: 'Work on your remote internship from the comfort of your home. Deliver the completed project to your project manager and add the completed skills to your profile resume. And Shine!'
        }
      }
    };

    vm.praise = {
        praise1 :{
            text: "We are THRILLED with the vet intern OweYaa matched to our team. He was motivated, hardworking, and a such a great fit that we had to keep working with him!",
            src: "assets/images/evol8tion_pink.png"
        },

        praise2 :{
            text: "I had the chance to work with one of the talented members of the OweYaa membership on a critical and complicated design project. The swiftness of the work and the quality was extraordinary. On top of that, I was able to support others who give so much to our country by serving in the military.",
            src: 'assets/images/plumAlley.png'
        },

        praise3 :{
            text: "I needed a Veteran with Military Intelligence experience to help me validate WarWire. OweYaa matched us to an incredibly talented Captain who helped me validate the product!",
            src: "assets/images/warwirelogo.png"
        },

        praise4 :{
            text: "My experience with OweYaa has been amazing. OweYaa placed me into an internship that was interesting and challenging. I learned new skills and gained experience in an industry that I was not familiar with. I would highly recommend to any veteran, to work with OweYaa to take your career to the next level.",
            src: "assets/images/gogiver.png"
        }
    };

    vm.partners = {
      first: {
        image: "assets/images/casy.png",
        link: 'http://casy.msccn.org/'
      },
      second: {
        image: "assets/images/hack-reactor-logo.png",
        link: 'https://www.hackreactor.com/'
      },
      third: {
        image: "assets/images/startup52.png",
        link: 'http://startup52.com/'
      },
      fourth: {
        image: "assets/images/vetalliance.jpg",
        link: 'www.nycveteransalliance.org/'
      },
      fifth: {
        image: "assets/images/militarymentors.png",
        link: 'militarymentors.org/'
      },
      sixth: {
        image: "assets/images/civicHall.png",
        link: 'https://civichall.org'
      },
      seventh: {
        image: "assets/images/veteranOwned.png",
        link: 'https://www.veteranownedbusiness.com/'
      },
      eigth: {
        image: "assets/images/38606_5.jpg",
        link: 'https://www.bestbuy.com/?ref=199&loc=dRloVCspcqA&acampID=5&siteID=dRloVCspcqA-KzxBIO_4xOQDQlm3lmmi7Q'
      }
    }
    vm.boxClass = function(index){
        if(index % 2 === 1){
            return "col-md-offset-1";
        }else{
            return "col-md-offset-2";
        }
    }
 }
 angular.module('oweyaa')
.controller('homeCtrl', homeCtrl);

})();
