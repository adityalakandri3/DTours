export const baseURL = 'https://wtsacademy.dedicateddevelopers.us/api'


export const image = (media) => {
    return (
      `https://wtsacademy.dedicateddevelopers.us` + `/uploads/product/${media}`
    );
  };

  export const profile_pic = (media) => {
    return (
      `https://wtsacademy.dedicateddevelopers.us` +
      `/uploads/user/profile_pic/${media}`
    );
  };
  

export const endPoints ={
    user :{
        signup : '/user/signup',
        signin : '/user/signin',
        profile : '/user/profile-details'
    },
    blog:{
        create:'/product/create',
        delete:'/product/remove',
        list: '/product/list',
        update:'/product/update',
        detail:'/product/detail'
    }
}