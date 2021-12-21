import InitApi from '@/services/InitApi'

export default {
  register(credentials) {
    return InitApi().post('daftar', credentials)
  },
  artikel_all() {
    return InitApi().get('artikel')
  },
  artikel_del(id) {
    return InitApi().delete('artikel/' + id)
  },
  //Akun
  login(datanya) {
    return InitApi().post('login', datanya);
  },
  akun() {
    return InitApi().get('akun')
  }
}