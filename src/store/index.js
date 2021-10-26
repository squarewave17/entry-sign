import { createStore } from "vuex";

export default createStore({
  state: {
    orgType: "",
    orgSize: "",
    firstName: "",
    lastName: "",
    orgName: "",
    postcode: "",
    contactEmail: "",
    contactNumber: "",
    hardwareType: "",
    layout: "",
    buttonFill: "Outline",
    buttonShape: "Rectangle",
    themeColour: "#888888",
    kioskColor: "",
    themeStyle: "Light",
    logoUpload:
      "https://www.dashmedia.co.uk/wp-content/uploads/2020/08/logo.png",
    additionalRFID: "",
    additionalDesk: "",
    additionalWall: "",
    accessDoorControl: null,
    misSystem: "",
    ICP: [
      "Touch Free Sign In",
      "Smart Connected Sanitisation",
      "Rapid Temperature Screening",
    ],
    testAddon: "",
    QRCodeScanner: "",
    FireAlarmInterface: "",
    EvolisRibbon: "",
    CardPrinter: "",
    MifareCoinTag: "",
    MifareFob: "",
    MifareSticker: "",
    Paxton110Fobs: "",
    MifareWristband: "",
    MifareWristbandBlue: "",
    MifareWristbandYellow: "",
    A7PlasticWallet: "",
    CardHolderCloseFace: "",
    CardHolderOpenBlack: "",
    CardHolderOpenClear: "",
    CardHolderOpenNavy: "",
    CardHolderOpenOrange: "",
    CardHolderOpenPortrait: "",
    CardHolderOpenRed: "",
    CardHolderOpenRoyal: "",
    EasyDoorCardHolder: "",
    MifareCards: "",
    PaxtonCards: "",
    PVCISOCards: "",
    LanyardBlack: "",
    LanyardDarkGreen: "",
    LanyardGovernor: "",
    LanyardGrey: "",
    LanyardNavy: "",
    LanyardOrange: "",
    LanyardRed: "",
    LanyardRoyalBlue: "",
    LanyardStaff: "",
    LanyardVisitor: "",
    LanyardYellow: "",
    YoYoReelOval: "",
    YoYoReelRound: "",
    EntrysignBrotherLabels: "",
    EntrysignSeikoLabels: "",
    SeikoBusinessCards: "",
  },
  mutations: {
    updateOrgType(state, orgType) {
      state.orgType = orgType;
    },
    updateOrgSize(state, orgSize) {
      state.orgSize = orgSize;
    },
    updateFirstName(state, firstName) {
      state.firstName = firstName;
    },
    updateLastName(state, lastName) {
      state.lastName = lastName;
    },
    updateOrgName(state, orgName) {
      state.orgName = orgName;
    },
    updatePostcode(state, postcode) {
      state.postcode = postcode;
    },
    updateContactNumber(state, contactNumber) {
      state.contactNumber = contactNumber;
    },
    updateContactEmail(state, contactEmail) {
      state.contactEmail = contactEmail;
    },
    updateHardwareType(state, hardwareType) {
      state.hardwareType = hardwareType;
    },
    updateLayout(state, layout) {
      state.layout = layout;
    },
    updateButtonFill(state, buttonFill) {
      state.buttonFill = buttonFill;
    },
    updateButtonShape(state, buttonShape) {
      state.buttonShape = buttonShape;
    },
    updateThemeColour(state, themeColour) {
      state.themeColour = themeColour;
    },
    updateKioskColor(state, kioskColor) {
      state.kioskColor = kioskColor;
    },
    updateThemeStyle(state, themeStyle) {
      state.themeStyle = themeStyle;
    },
    updatelogo(state, logoUpload) {
      state.logoUpload = logoUpload;
    },
    updateAdditionalRFID(state, additionalRFID) {
      state.additionalRFID = additionalRFID;
    },
    updateAdditionalDesk(state, additionalDesk) {
      state.additionalDesk = additionalDesk;
    },
    updateAdditionalWall(state, additionalWall) {
      state.additionalWall = additionalWall;
    },
    updateAccessDoorControl(state, accessDoorControl) {
      state.accessDoorControl = accessDoorControl;
    },
    updateMisSystem(state, misSystem) {
      state.misSystem = misSystem;
    },
    updateIcp(state, ICP) {
      state.ICP = ICP;
    },
    QRCodeScanner(state, QRCodeScanner) {
      state.QRCodeScanner = QRCodeScanner;
    },
    FireAlarmInterface(state, FireAlarmInterface) {
      state.FireAlarmInterface = FireAlarmInterface;
    },
    EvolisRibbon(state, EvolisRibbon) {
      state.EvolisRibbon = EvolisRibbon;
    },
    CardPrinter(state, CardPrinter) {
      state.CardPrinter = CardPrinter;
    },
    MifareCoinTag(state, MifareCoinTag) {
      state.MifareCoinTag = MifareCoinTag;
    },
    MifareFob(state, MifareFob) {
      state.MifareFob = MifareFob;
    },
    MifareSticker(state, MifareSticker) {
      state.MifareSticker = MifareSticker;
    },
    Paxton110Fobs(state, Paxton110Fobs) {
      state.Paxton110Fobs = Paxton110Fobs;
    },
    MifareWristband(state, MifareWristband) {
      state.MifareWristband = MifareWristband;
    },
    MifareWristbandBlue(state, MifareWristbandBlue) {
      state.MifareWristbandBlue = MifareWristbandBlue;
    },
    MifareWristbandYellow(state, MifareWristbandYellow) {
      state.MifareWristbandYellow = MifareWristbandYellow;
    },
    A7PlasticWallet(state, A7PlasticWallet) {
      state.A7PlasticWallet = A7PlasticWallet;
    },
    CardHolderCloseFace(state, CardHolderCloseFace) {
      state.CardHolderCloseFace = CardHolderCloseFace;
    },
    CardHolderOpenBlack(state, CardHolderOpenBlack) {
      state.CardHolderOpenBlack = CardHolderOpenBlack;
    },
    CardHolderOpenClear(state, CardHolderOpenClear) {
      state.CardHolderOpenClear = CardHolderOpenClear;
    },
    CardHolderOpenNavy(state, CardHolderOpenNavy) {
      state.CardHolderOpenNavy = CardHolderOpenNavy;
    },
    CardHolderOpenOrange(state, CardHolderOpenOrange) {
      state.CardHolderOpenOrange = CardHolderOpenOrange;
    },
    CardHolderOpenPortrait(state, CardHolderOpenPortrait) {
      state.CardHolderOpenPortrait = CardHolderOpenPortrait;
    },
    CardHolderOpenRed(state, CardHolderOpenRed) {
      state.CardHolderOpenRed = CardHolderOpenRed;
    },
    CardHolderOpenRoyal(state, CardHolderOpenRoyal) {
      state.CardHolderOpenRoyal = CardHolderOpenRoyal;
    },
    EasyDoorCardHolder(state, EasyDoorCardHolder) {
      state.EasyDoorCardHolder = EasyDoorCardHolder;
    },
    MifareCards(state, MifareCards) {
      state.MifareCards = MifareCards;
    },
    PaxtonCards(state, PaxtonCards) {
      state.PaxtonCards = PaxtonCards;
    },
    PVCISOCards(state, PVCISOCards) {
      state.PVCISOCards = PVCISOCards;
    },
    LanyardBlack(state, LanyardBlack) {
      state.LanyardBlack = LanyardBlack;
    },
    LanyardDarkGreen(state, LanyardDarkGreen) {
      state.LanyardDarkGreen = LanyardDarkGreen;
    },
    LanyardGovernor(state, LanyardGovernor) {
      state.LanyardGovernor = LanyardGovernor;
    },
    LanyardGrey(state, LanyardGrey) {
      state.LanyardGrey = LanyardGrey;
    },
    LanyardNavy(state, LanyardNavy) {
      state.LanyardNavy = LanyardNavy;
    },
    LanyardOrange(state, LanyardOrange) {
      state.LanyardOrange = LanyardOrange;
    },
    LanyardRed(state, LanyardRed) {
      state.LanyardRed = LanyardRed;
    },
    LanyardRoyalBlue(state, LanyardRoyalBlue) {
      state.LanyardRoyalBlue = LanyardRoyalBlue;
    },
    LanyardStaff(state, LanyardStaff) {
      state.LanyardStaff = LanyardStaff;
    },
    LanyardVisitor(state, LanyardVisitor) {
      state.LanyardVisitor = LanyardVisitor;
    },
    LanyardYellow(state, LanyardYellow) {
      state.LanyardYellow = LanyardYellow;
    },
    YoYoReelOval(state, YoYoReelOval) {
      state.YoYoReelOval = YoYoReelOval;
    },
    YoYoReelRound(state, YoYoReelRound) {
      state.YoYoReelRound = YoYoReelRound;
    },
    EntrysignBrotherLabels(state, EntrysignBrotherLabels) {
      state.EntrysignBrotherLabels = EntrysignBrotherLabels;
    },
    EntrysignSeikoLabels(state, EntrysignSeikoLabels) {
      state.EntrysignSeikoLabels = EntrysignSeikoLabels;
    },
    SeikoBusinessCards(state, SeikoBusinessCards) {
      state.SeikoBusinessCards = SeikoBusinessCards;
    },
  },
  actions: {},
  modules: {},
  getters: {
    orgType: (state) => state.orgType,
    orgSize: (state) => state.orgSize,
    firstName: (state) => state.firstName,
    lastName: (state) => state.lastName,
    orgName: (state) => state.orgName,
    postcode: (state) => state.postcode,
    contactNumber: (state) => state.contactNumber,
    contactEmail: (state) => state.contactEmail,
    hardwareType: (state) => state.hardwareType,
    layout: (state) => state.layout,
    buttonFill: (state) => state.buttonFill,
    buttonShape: (state) => state.buttonShape,
    themeColour: (state) => state.themeColour,
    kioskColor: (state) => state.kioskColor,
    themeStyle: (state) => state.themeStyle,
    logoUpload: (state) => state.logoUpload,
    additionalRFID: (state) => state.additionalRFID,
    additionalDesk: (state) => state.additionalDesk,
    additionalWall: (state) => state.additionalWall,
    accessDoorControl: (state) => state.accessDoorControl,
    misSystem: (state) => state.misSystem,
    ICP: (state) => state.ICP,
    QRCodeScanner: (state) => state.QRCodeScanner,
    FireAlarmInterface: (state) => state.FireAlarmInterface,
    EvolisRibbon: (state) => state.EvolisRibbon,
    CardPrinter: (state) => state.CardPrinter,
    MifareCoinTag: (state) => state.MifareCoinTag,
    MifareFob: (state) => state.MifareFob,
    MifareSticker: (state) => state.MifareSticker,
    Paxton110Fobs: (state) => state.Paxton110Fobs,
    MifareWristband: (state) => state.MifareWristband,
    MifareWristbandBlue: (state) => state.MifareWristbandBlue,
    MifareWristbandYellow: (state) => state.MifareWristbandYellow,
    A7PlasticWallet: (state) => state.A7PlasticWallet,
    CardHolderCloseFace: (state) => state.CardHolderCloseFace,
    CardHolderOpenBlack: (state) => state.CardHolderOpenBlack,
    CardHolderOpenClear: (state) => state.CardHolderOpenClear,
    CardHolderOpenNavy: (state) => state.CardHolderOpenNavy,
    CardHolderOpenOrange: (state) => state.CardHolderOpenOrange,
    CardHolderOpenPortrait: (state) => state.CardHolderOpenPortrait,
    CardHolderOpenRed: (state) => state.CardHolderOpenRed,
    CardHolderOpenRoyal: (state) => state.CardHolderOpenRoyal,
    EasyDoorCardHolder: (state) => state.EasyDoorCardHolder,
    MifareCards: (state) => state.MifareCards,
    PaxtonCards: (state) => state.PaxtonCards,
    PVCISOCards: (state) => state.PVCISOCards,
    LanyardBlack: (state) => state.LanyardBlack,
    LanyardDarkGreen: (state) => state.LanyardDarkGreen,
    LanyardGovernor: (state) => state.LanyardGovernor,
    LanyardGrey: (state) => state.LanyardGrey,
    LanyardNavy: (state) => state.LanyardNavy,
    LanyardOrange: (state) => state.LanyardOrange,
    LanyardRed: (state) => state.LanyardRed,
    LanyardRoyalBlue: (state) => state.LanyardRoyalBlue,
    LanyardStaff: (state) => state.LanyardStaff,
    LanyardVisitor: (state) => state.LanyardVisitor,
    LanyardYellow: (state) => state.LanyardYellow,
    YoYoReelOval: (state) => state.YoYoReelOval,
    YoYoReelRound: (state) => state.YoYoReelRound,
    EntrysignBrotherLabels: (state) => state.EntrysignBrotherLabels,
    EntrysignSeikoLabels: (state) => state.EntrysignSeikoLabels,
    SeikoBusinessCards: (state) => state.SeikoBusinessCards,
  },
});
