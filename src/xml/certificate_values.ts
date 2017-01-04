import { XmlElement, XmlChildElement, XmlAttribute } from "xml-core";

import { XmlXades } from "./xml";
import { XadesObject, XadesCollection } from "./xml_base";
import { Any } from "./any";
import { EncapsulatedPKIData } from "./encapsulated_pki_data";

/**
 * 
 * <xsd:element name="CertificateValues" type="CertificateValuesType"/>
 * <xsd:complexType name="CertificateValuesType">
 *     <xsd:choice minOccurs="0" maxOccurs="unbounded">
 *         <xsd:element name="EncapsulatedX509Certificate" type="EncapsulatedPKIDataType"/>
 *         <xsd:element name="OtherCertificate" type="AnyType"/>
 *     </xsd:choice>
 *     <xsd:attribute name="Id" type="xsd:ID" use="optional"/>
 * </xsd:complexType>
 * 
 */

@XmlElement({ localName: XmlXades.ElementNames.OtherCertificate })
export class OtherCertificate extends Any { }

@XmlElement({ localName: "OtherCertificateCollection" })
export class OtherCertificateCollection extends XadesCollection<OtherCertificate> { }

@XmlElement({ localName: XmlXades.ElementNames.EncapsulatedX509Certificate })
export class EncapsulatedX509Certificate extends EncapsulatedPKIData { }

@XmlElement({ localName: "EncapsulatedX509CertificateCollection" })
export class EncapsulatedX509CertificateCollection extends XadesCollection<EncapsulatedX509Certificate> { }

@XmlElement({ localName: XmlXades.ElementNames.CertificateValues })
export class CertificateValues extends XadesObject {

    @XmlAttribute({ localName: XmlXades.AttributeNames.Id, defaultValue: "" })
    Id: string;

    @XmlChildElement({ parser: EncapsulatedX509CertificateCollection, noRoot: true })
    EncapsulatedX509Certificates: EncapsulatedX509CertificateCollection;

    @XmlChildElement({ parser: OtherCertificateCollection, noRoot: true })
    OtherCertificates: OtherCertificateCollection;
}