import { City } from "../entity/City";
import { Manufacturer } from "../entity/Manufacturer";
import { Order } from "../entity/Order";
import {
    ActivityScope,
    DeliveryTime,
    Gender,
    Organization,
    PaymentDeadLine,
    ServiceRange,
    Store,
    StoreStatus,
    StoreType,
    Unit,
    University,
    WorkingShift
} from "../entity/Site";
import { State } from "../entity/State";
import { Stuff } from "../entity/Stuff";
import { User } from "../entity/User";
import { UserRole, UserToSite } from "../entity/UserToSite";
import { Ware } from "../entity/Ware";
import { WareClass, WareType } from "../entity/WareClass";
import { WareGroup } from "../entity/WareGroup";

export async function createData() {
    const state = await State.create({
        name: "همدان",
        enName: "Hamadan"
    }).save();

    const city = await City.create({
        name: "همدان",
        enName: "Hamadan",
        stateId: state.id
    }).save();

    const university = await University.create({
        name: "دانشگاه علوم پزشکی همدان",
        address: "آدرس دانشگاه",
        location: "لوکیشن دانشگاه",
        stateId: state.id,
        cityId: city.id
    }).save();

    const organization = await Organization.create({
        name: "بیمارستان فرشچیان",
        address: "آدرس بیمارستان فرشچیان",
        universityId: university.id,
        stateId: state.id,
        cityId: city.id
    }).save();

    const wareClass = await WareClass.create({
        wareType: WareType.Medical,
        name: "یک کلاس برای دارو ها",
        enName: "enName for WareClass"
    }).save();

    const wareGroup = await WareGroup.create({
        wareClassId: wareClass.id,
        name: "یک گروه برای کلاس دارو ها",
        enName: "enName for WareGroup"
    }).save();

    const manufacturer = await Manufacturer.create({
        name: "کارخانه تولید دارو اول",
        enName: "enName for manufacturer",
        country: "USA"
    }).save();

    const ware = await Ware.create({
        name: "کیت تی اس اچ شرکت مونوبایند",
        enName: "kit TSH",
        irc: "123456789",
        price: 100000,
        manufacturerId: manufacturer.id,
        wareGroupId: wareGroup.id,
        manufacturername: manufacturer.name
    }).save();

    const unit = await Unit.create({
        name: "بخش آزمایشگاه",
        address: "آدرس بخش آزمایشگاه",
        organizationId: organization.id,
        universityId: university.id,
        stateId: state.id,
        cityId: city.id
    }).save();

    const masterUser = await User.create({
        firstName: "صالح",
        lastName: "صالحنژاد",
        phone: 9185409343,
        password: "123456",
        ssn: "3890918527",
        devices: []
    }).save();

    await UserToSite.create({
        userId: masterUser.id,
        role: UserRole.Master
    }).save();

    const organizationHead = await User.create({
        firstName: "اسم کوچک رییس سازمان",
        lastName: "اسم بزرگ رییس سازمان",
        phone: 1235,
        password: "123456",
        ssn: "1234589851",
        devices: []
    }).save();

    await UserToSite.create({
        userId: organizationHead.id,
        role: UserRole.OrganizationHead,
        siteId: organization.id
    }).save();

    await UserToSite.create({
        userId: organizationHead.id,
        role: UserRole.Admin,
        siteId: organization.id
    }).save();

    const unitEmployee = await User.create({
        firstName: "اسم کوچک کارمند واحد",
        lastName: "اسم بزرگ کارمند واحد",
        phone: 1236,
        password: "123456",
        ssn: "1234589856",
        devices: []
    }).save();

    await UserToSite.create({
        userId: unitEmployee.id,
        role: UserRole.UnitEmployee,
        siteId: unit.id
    }).save();

    const unitHead = await User.create({
        firstName: "اسم کوچک رییس واحد",
        lastName: "اسم بزرگ رییس واحد",
        phone: 1237,
        password: "123456",
        ssn: "1234589857",
        devices: []
    }).save();

    await UserToSite.create({
        userId: unitHead.id,
        role: UserRole.UnitHead,
        siteId: unit.id
    }).save();

    const store = await Store.create({
        name: "اسم فروشگاه",
        address: "آدرس فروشگاه",
        storeType: StoreType.Company,
        economicCode: "123456789",
        postalCode: "123456789",
        email: "email@email.com",
        ceoname: "اسم کامل مدیر",
        ceoSsn: "12345689",
        mobileNumber: 9125487921,
        ceoBirthDate: new Date("2015-03-25T12:00:00Z"),
        ceoGender: Gender.Male,
        ceoCityId: city.id,
        ceoStateId: state.id,
        ceoPostalCode: "123456789",
        ceoAddress: "آدرس مدیر",
        ceoContact: "456798123",
        ceoEmail: "ceoEmail@email.com",
        cardMelliUrl: "cardMelliUrl",
        lastNewspaperUrl: "lastNewspaperUrl",
        mojavvezUrl: "MojavvezUrl",
        ceoPhotoUrl: "ceoPhotoUrl",
        bankCardNumber: "7894563212547896",
        shebaNumber: "45678945613246578946513456789798",
        nameOfAccountHolder: "اسم دارنده حساب",
        bankName: "اسم بانک",
        cityDeliveryTime: DeliveryTime.TwoDay,
        stateDeliveryTime: DeliveryTime.ThreeDay,
        cityId: city.id,
        stateId: state.id,
        workingShift: WorkingShift.MorningAndAfternoon,
        paymentDeadLine: PaymentDeadLine.ThreeMonth,
        serviceRange: [ServiceRange.City, ServiceRange.State],
        fastDelivery: true,
        status: StoreStatus.Confirmed,
        activityScope: ActivityScope.Medicine
    }).save();

    const storeHead = await User.create({
        firstName: "اسم کوچک رییس مغازه",
        lastName: "اسم بزرگ رییس مغازه",
        phone: 1238,
        password: "123456",
        ssn: "1234589858",
        devices: []
    }).save();

    await UserToSite.create({
        userId: storeHead.id,
        role: UserRole.StoreHead,
        siteId: store.id
    }).save();

    await Stuff.create({
        expiration: new Date("2020-03-25T12:00:00Z"),
        inventoryNo: 100,
        hasAbsolutePrice: true,
        price: 20000,
        wareId: ware.id,
        storeId: store.id
    }).save();

    await Order.create({
        num: 10,
        remaining: 2,
        wareId: ware.id,
        requestorUserId: unitEmployee.id,
        organizationId: organization.id,
        unitId: unit.id,
        deliveryTime: new Date("2020-02-25T10:00:00Z")
    }).save();
}
