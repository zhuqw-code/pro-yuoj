import ACCESS_ENUM from "@/access/accessEnum";

/**
 * 判断用户权限
 * @param loginUser 当前用户
 * @param needAccess 当前页面需要的权限
 * return boolean 当前用户是否能够访问当前页面
 * */
const checkAccess = (loginUser: any, needAccess = ACCESS_ENUM.NOT_LOGIN) => {
  const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN;
  // 访问无任何权限的页面，都能访问
  if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
    return true;
  }
  // 访问登录用户页面，排除未登录用户
  if (needAccess === ACCESS_ENUM.USER) {
    if (loginUserAccess === ACCESS_ENUM.NOT_LOGIN) {
      return false;
    }
  }
  // 访问需要管理员权限的页面，只有管理员能进
  if (needAccess === ACCESS_ENUM.ADMIN) {
    if (loginUserAccess !== ACCESS_ENUM.ADMIN) {
      return false;
    }
  }
  return true;
};

export default checkAccess;
