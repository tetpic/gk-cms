'use server';
import store from '../redux/store';

export default async function checkAdmin() {
  // TODO: подрубить в проект redux toolkit чтобы брать значение что ты админ из стейта
  //заодно протестить возможно ли прокидывать стейт во вспомогательные функции

  let { authorized } = store.getState();

  // console.log()
  return true;
}
