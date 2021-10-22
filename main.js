      // variaveis podem ser let(permite alterar) ou const(constante)
      
      // DOM - Document Object Model - Documento criado pelos navegadores onde o mesmo realiza um mapeamento dos objetos do HTML e CSS do arquivo   e     cria um documento unico para que o próprio navegar consiga ler. 

      // camelCase    PascalCase    snake_case

      /* Arrow Function - Uma função 'resumida' 
        Função Normal:
          function nomeDaFuncao(){

          }

        Arrow Function:
          () => {}
      */

      const LinksSocialMedia = {
        github: "eversonrezende",
        youtube: "Rocketseat",
        instagram: "eversonrz",
        twitter: "everson_rz"
      }

      function changeSocialMediaLinks() {
        for (let li of socialLinks.children) {
          const social = li.getAttribute('class')

          li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

          //alert(li.children[0].href)
        }

      }

      changeSocialMediaLinks()

      function getGitHubProfileInfos() {
        const url = `https://api.github.com/users/${LinksSocialMedia.github}`

        fetch(url)
        .then(response => response.json())
        .then(data => {
          userName.textContent = data.name
          userBio.textContent = data.bio
          userLink.href = data.html_url
          userLogin.textContent = data.login
          userAvatar.src = data.avatar_url
        })
      }

      getGitHubProfileInfos()