import TomsOffroadLogo from "@/components/logos/toms-offroad";
import GatorWadersLogo from "@/components/logos/gator-waders";
import B2BTransportationLogo from "@/components/logos/b2b-transportation";
import BallisticArmorCoLogo from "@/components/logos/ballistic-armor-co";
import EnergyBrosLogo from "@/components/logos/energy-bros";
import JBSteelLogo from "@/components/logos/jb-steel";
import OregonTruckAutoLogo from "@/components/logos/oregon-truck-auto";
import CitiBankLogo from "@/components/logos/citi-bank";
import HighwayProductsLogo from "@/components/logos/highway-products";
import TIAALogo from "@/components/logos/tiaa";
import OperationWarmLogo from "@/components/logos/operation-warm";
import NICIndustriesLogo from "@/components/logos/nic-industries";
import ChinookWindsLogo from "@/components/logos/chinook-winds";
import TangleFreeLogo from "@/components/logos/tanglefree";
import PlannedParenthoodLogo from "@/components/logos/planned-parenthood";
import PrismaticPowdersLogo from "@/components/logos/prismatic-powders";
import CerakoteLogo from "@/components/logos/cerakote";
import PavatiLogo from "@/components/logos/pavati";

const ClientLogos = {
    "toms-offroad": TomsOffroadLogo,
    "gator-waders": GatorWadersLogo,
    "b2b-transportation": B2BTransportationLogo,
    "ballistic-armor-co": BallisticArmorCoLogo,
    "energy-bros": EnergyBrosLogo,
    "jb-steel": JBSteelLogo,
    "oregon-truck-auto": OregonTruckAutoLogo,
    "citi-bank": CitiBankLogo,
    "highway-products": HighwayProductsLogo,
    tiaa: TIAALogo,
    "operation-warm": OperationWarmLogo,
    "nic-industries": NICIndustriesLogo,
    "chinook-winds": ChinookWindsLogo,
    tanglefree: TangleFreeLogo,
    "planned-parenthood": PlannedParenthoodLogo,
    "prismatic-powders": PrismaticPowdersLogo,
    cerakote: CerakoteLogo,
    pavati: PavatiLogo,
} as const;

export type ClientName = keyof typeof ClientLogos;

export type ClientLogoProps = {
    name: ClientName;
    className?: string;
};

export default function ClientLogo({ name, className = "" }: ClientLogoProps) {
    const LogoComponent = ClientLogos[name];
    return <LogoComponent className={`transition-colors h-10 lg:h-15 ${className}`} />;
}