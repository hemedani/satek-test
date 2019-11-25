import { UserRole } from "../entity/UserToSite";
import { isAuth } from "../middleware/isAuth";

export const MasterMiddlewares = [isAuth(UserRole.Master)];

export const AdminMiddlewares = [isAuth(UserRole.Admin)];

export const NormalUserMiddlewares = [isAuth(UserRole.Normal)];

export const UnitUserMiddlewares = [isAuth(UserRole.UnitEmployee)];

export const StoreHeadMiddlewares = [isAuth(UserRole.StoreHead)];
