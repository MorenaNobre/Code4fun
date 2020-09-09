import axios from 'axios'

const delay = () => new Promise(resolve => setTimeout (resolve, 1000))

const umPorSegundo = async () => {
  await delay(console.log('1s'))
  await delay(console.log('2s'))
  await delay(console.log('3s'))
}

umPorSegundo()

const getUserFromGithub = async (user) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`)
    console.log(response.data)
  } catch (err) {
    console.log('Usuário inexistente!')
  }
}

getUserFromGithub('MorenaNobre')
getUserFromGithub('BlatzBlutz')


class Github {
  static async getRepositories(repo) {
    try {
      const responseRepo = await axios.get(`https://api.github.com/repos/${repo}`)
      console.log(responseRepo.data)
    } catch (err) {
      console.log('Repositório inexistente!')
    }
  }
}
Github.getRepositories('MorenaNobre/NLW-Proffy')



const buscaUsuario = async usuario => {
  try {
    const responseUser = await axios.get(`https://api.github.com/users/${usuario}`)
    console.log(responseUser.data)
  } catch (err) {
    console.log('Usuário inexistente!')
  }
}
buscaUsuario('MorenaNobre')