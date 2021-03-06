'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_1 = require('tslib');
var XmlCore = require('xml-core');
var XmlDSigJs = require('xmldsigjs');
const uuidv1 = require('uuid/v1');
const xmlId = uuidv1();

let XmlXades = {
    DefaultPrefix: "xades",
    /**
     * The XAdES XML namespace URI
     */
    NamespaceURI: "http://uri.etsi.org/01903/v1.3.2#",
    /**
     * Mandated type name for the Uri reference to the SignedProperties element
     */
    SignedPropertiesType: "http://uri.etsi.org/01903/v1.3.2#SignedProperties",
    ElementNames: {
        Any: "Any",
        ByName: "ByName",
        ByKey: "ByKey",
        AttrAuthoritiesCertValues: "AttrAuthoritiesCertValues",
        AttributeRevocationValues: "AttributeRevocationValues",
        AttributeCertificateRefs: "AttributeCertificateRefs",
        AttributeRevocationRefs: "AttributeRevocationRefs",
        QualifyingProperties: "QualifyingProperties",
        QualifyingPropertiesReference: "QualifyingPropertiesReference",
        SignedProperties: "SignedProperties",
        SignedSignatureProperties: "SignedSignatureProperties",
        SignedDataObjectProperties: "SignedDataObjectProperties",
        UnsignedProperties: "UnsignedProperties",
        UnsignedSignatureProperties: "UnsignedSignatureProperties",
        UnsignedDataObjectProperties: "UnsignedDataObjectProperties",
        UnsignedDataObjectProperty: "UnsignedDataObjectProperty",
        SigningTime: "SigningTime",
        SigningCertificate: "SigningCertificate",
        SignaturePolicyIdentifier: "SignaturePolicyIdentifier",
        SignatureProductionPlace: "SignatureProductionPlace",
        SignerRole: "SignerRole",
        Cert: "Cert",
        CertDigest: "CertDigest",
        IssuerSerial: "IssuerSerial",
        DataObjectFormat: "DataObjectFormat",
        CommitmentTypeIndication: "CommitmentTypeIndication",
        AllDataObjectsTimeStamp: "AllDataObjectsTimeStamp",
        IndividualDataObjectsTimeStamp: "IndividualDataObjectsTimeStamp",
        HashDataInfo: "HashDataInfo",
        EncapsulatedTimeStamp: "EncapsulatedTimeStamp",
        XMLTimeStamp: "XMLTimeStamp",
        XAdESTimeStamp: "XAdESTimeStamp",
        OtherTimeStamp: "OtherTimeStamp",
        Description: "Description",
        ObjectIdentifier: "ObjectIdentifier",
        MimeType: "MimeType",
        Encoding: "Encoding",
        Identifier: "Identifier",
        DocumentationReferences: "DocumentationReferences",
        DocumentationReference: "DocumentationReference",
        CommitmentTypeId: "CommitmentTypeId",
        ObjectReference: "ObjectReference",
        CommitmentTypeQualifiers: "CommitmentTypeQualifiers",
        AllSignedDataObjects: "AllSignedDataObjects",
        CommitmentTypeQualifier: "CommitmentTypeQualifier",
        SignaturePolicyId: "SignaturePolicyId",
        SignaturePolicyImplied: "SignaturePolicyImplied",
        SigPolicyId: "SigPolicyId",
        SigPolicyHash: "SigPolicyHash",
        SigPolicyQualifier: "SigPolicyQualifier",
        SigPolicyQualifiers: "SigPolicyQualifiers",
        SPURI: "SPURI",
        SPUserNotice: "SPUserNotice",
        NoticeRef: "NoticeRef",
        ExplicitText: "ExplicitText",
        ClaimedRoles: "ClaimedRoles",
        ClaimedRole: "ClaimedRole",
        CertifiedRoles: "CertifiedRoles",
        CertifiedRole: "CertifiedRole",
        Organization: "Organization",
        NoticeNumbers: "NoticeNumbers",
        Int: "int",
        City: "City",
        PostalCode: "PostalCode",
        StateOrProvince: "StateOrProvince",
        CountryName: "CountryName",
        CounterSignature: "CounterSignature",
        SignatureTimeStamp: "SignatureTimeStamp",
        CompleteCertificateRefs: "CompleteCertificateRefs",
        CompleteRevocationRefs: "CompleteRevocationRefs",
        SigAndRefsTimeStamp: "SigAndRefsTimeStamp",
        RefsOnlyTimeStamp: "RefsOnlyTimeStamp",
        CertificateValues: "CertificateValues",
        RevocationValues: "RevocationValues",
        ArchiveTimeStamp: "ArchiveTimeStamp",
        CertRefs: "CertRefs",
        CRLRefs: "CRLRefs",
        CRLRef: "CRLRef",
        OCSPRefs: "OCSPRefs",
        OtherRefs: "OtherRefs",
        OtherRef: "OtherRef",
        DigestAlgAndValue: "DigestAlgAndValue",
        CRLIdentifier: "CRLIdentifier",
        Issuer: "Issuer",
        IssueTime: "IssueTime",
        Number: "Number",
        OCSPRef: "OCSPRef",
        OCSPIdentifier: "OCSPIdentifier",
        ResponderID: "ResponderID",
        ProducedAt: "ProducedAt",
        EncapsulatedX509Certificate: "EncapsulatedX509Certificate",
        OtherCertificate: "OtherCertificate",
        CRLValues: "CRLValues",
        OCSPValues: "OCSPValues",
        OtherValues: "OtherValues",
        OtherValue: "OtherValue",
        EncapsulatedCRLValue: "EncapsulatedCRLValue",
        EncapsulatedOCSPValue: "EncapsulatedOCSPValue",
        ReferenceInfo: "ReferenceInfo",
        Include: "Include",
    },
    AttributeNames: {
        Id: "Id",
        Encoding: "Encoding",
        Target: "Target",
        ObjectReference: "ObjectReference",
        Qualifier: "Qualifier",
        Uri: "uri",
        URI: "URI",
        ReferencedData: "referencedData",
    },
};

let XadesObject = class XadesObject extends XmlCore.XmlObject {
};
XadesObject = tslib_1.__decorate([
    XmlCore.XmlElement({
        localName: "xades",
        namespaceURI: XmlXades.NamespaceURI,
        prefix: XmlXades.DefaultPrefix,
    })
], XadesObject);
let XadesCollection = class XadesCollection extends XmlCore.XmlCollection {
};
XadesCollection = tslib_1.__decorate([
    XmlCore.XmlElement({
        localName: "xades_collection",
        namespaceURI: XmlXades.NamespaceURI,
        prefix: XmlXades.DefaultPrefix,
    })
], XadesCollection);

/**
 * <xsd:element name="Any" type="AnyType"/>
 * <xsd:complexType name="AnyType" mixed="true">
 * 	 <xsd:sequence minOccurs="0" maxOccurs="unbounded">
 * 	   <xsd:any namespace="##any" processContents="lax"/>
 * 	 </xsd:sequence>
 * 	 <xsd:anyAttribute namespace="##any"/>
 * </xsd:complexType>
 */
let Any = class Any extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlContent()
], Any.prototype, "Value", void 0);
Any = tslib_1.__decorate([
    XmlCore.XmlElement({
        localName: XmlXades.ElementNames.Any,
    })
], Any);
let AnyCollection = class AnyCollection extends XadesCollection {
};
AnyCollection = tslib_1.__decorate([
    XmlCore.XmlElement({
        localName: XmlXades.ElementNames.Any,
    })
], AnyCollection);

/**
 *
 * <xsd:element name="EncapsulatedPKIData" type="EncapsulatedPKIDataType"/>
 * <xsd:complexType name="EncapsulatedPKIDataType">
 *   <xsd:simpleContent>
 *     <xsd:extension base="xsd:base64Binary">
 * 	     <xsd:attribute name="Id" type="xsd:ID" use="optional"/>
 *       <xsd:attribute name="Encoding" type="xsd:anyURI" use="optional"/>
 * 	   </xsd:extension>
 *   </xsd:simpleContent>
 * </xsd:complexType>
 *
 */
const XmlEncodingConverter = {
    get: (value) => {
        switch (value) {
            case "der":
            case "ber":
            case "cer":
            case "per":
            case "xer":
                return `http://uri.etsi.org/01903/v1.2.2#${value.toUpperCase()}`;
        }
        return void 0;
    },
    set: (value) => {
        const regexp = /#(\w+)$/;
        const res = regexp.exec(value);
        if (res) {
            return res[1].toLowerCase();
        }
        return null;
    },
};
let EncapsulatedPKIData = class EncapsulatedPKIData extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlAttribute({
        localName: XmlXades.AttributeNames.Id,
        defaultValue: "",
    })
], EncapsulatedPKIData.prototype, "Id", void 0);
tslib_1.__decorate([
    XmlCore.XmlAttribute({
        localName: XmlXades.AttributeNames.Encoding,
        defaultValue: null,
        converter: XmlEncodingConverter,
    })
], EncapsulatedPKIData.prototype, "Encoding", void 0);
tslib_1.__decorate([
    XmlCore.XmlContent({
        required: true,
        converter: XmlCore.XmlBase64Converter,
    })
], EncapsulatedPKIData.prototype, "Value", void 0);
EncapsulatedPKIData = tslib_1.__decorate([
    XmlCore.XmlElement({
        localName: "EncapsulatedPKIData",
    })
], EncapsulatedPKIData);

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
let OtherCertificate = class OtherCertificate extends Any {
};
OtherCertificate = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.OtherCertificate })
], OtherCertificate);
let OtherCertificateCollection = class OtherCertificateCollection extends XadesCollection {
};
OtherCertificateCollection = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: "OtherCertificateCollection", parser: OtherCertificate })
], OtherCertificateCollection);
let EncapsulatedX509Certificate = class EncapsulatedX509Certificate extends EncapsulatedPKIData {
};
EncapsulatedX509Certificate = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.EncapsulatedX509Certificate })
], EncapsulatedX509Certificate);
let EncapsulatedX509CertificateCollection = class EncapsulatedX509CertificateCollection extends XadesCollection {
};
EncapsulatedX509CertificateCollection = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: "EncapsulatedX509CertificateCollection", parser: EncapsulatedX509Certificate })
], EncapsulatedX509CertificateCollection);
let CertificateValues = class CertificateValues extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlAttribute({ localName: XmlXades.AttributeNames.Id, defaultValue: "" })
], CertificateValues.prototype, "Id", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: EncapsulatedX509CertificateCollection, noRoot: true })
], CertificateValues.prototype, "EncapsulatedX509Certificates", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: OtherCertificateCollection, noRoot: true })
], CertificateValues.prototype, "OtherCertificates", void 0);
CertificateValues = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.CertificateValues })
], CertificateValues);

let Identifier = class Identifier extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlAttribute({
        localName: XmlXades.AttributeNames.Qualifier,
    })
], Identifier.prototype, "Qualifier", void 0);
tslib_1.__decorate([
    XmlCore.XmlContent({
        defaultValue: "",
        required: true,
    })
], Identifier.prototype, "Value", void 0);
Identifier = tslib_1.__decorate([
    XmlCore.XmlElement({
        localName: XmlXades.ElementNames.Identifier,
    })
], Identifier);
let DocumentationReference = class DocumentationReference extends XadesObject {
    OnLoadXml(e) {
        if (e.textContent) {
            this.Uri = e.textContent;
        }
    }
    OnGetXml(e) {
        if (this.Uri) {
            e.textContent = this.Uri;
        }
    }
};
tslib_1.__decorate([
    XmlCore.XmlContent({
        defaultValue: "",
        required: true,
    })
], DocumentationReference.prototype, "Uri", void 0);
DocumentationReference = tslib_1.__decorate([
    XmlCore.XmlElement({
        localName: XmlXades.ElementNames.DocumentationReference,
    })
], DocumentationReference);
let DocumentationReferences = class DocumentationReferences extends XadesCollection {
};
DocumentationReferences = tslib_1.__decorate([
    XmlCore.XmlElement({
        localName: XmlXades.ElementNames.DocumentationReferences,
        parser: DocumentationReference,
    })
], DocumentationReferences);
let ObjectIdentifier = class ObjectIdentifier extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlChildElement({
        parser: Identifier,
        required: true,
    })
], ObjectIdentifier.prototype, "Identifier", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({
        localName: XmlXades.ElementNames.Description,
        namespaceURI: XmlXades.NamespaceURI,
        prefix: XmlXades.DefaultPrefix,
        defaultValue: "",
    })
], ObjectIdentifier.prototype, "Description", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({
        parser: DocumentationReferences,
    })
], ObjectIdentifier.prototype, "DocumentationReferences", void 0);
ObjectIdentifier = tslib_1.__decorate([
    XmlCore.XmlElement({
        localName: XmlXades.ElementNames.ObjectIdentifier,
    })
], ObjectIdentifier);

/**
 *
 * <xsd:element name="CommitmentTypeIndication" type="CommitmentTypeIndicationType"/>
 * <xsd:complexType name="CommitmentTypeIndicationType">
 *     <xsd:sequence>
 *         <xsd:element name="CommitmentTypeId" type="ObjectIdentifierType"/>
 *         <xsd:choice>
 *             <xsd:element name="ObjectReference" type="xsd:anyURI" maxOccurs="unbounded"/>
 *             <xsd:element name="AllSignedDataObjects"/>
 *         </xsd:choice>
 *         <xsd:element name="CommitmentTypeQualifiers" type="CommitmentTypeQualifiersListType" minOccurs="0"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 * <xsd:complexType name="CommitmentTypeQualifiersListType">
 *     <xsd:sequence>
 *         <xsd:element name="CommitmentTypeQualifier" type="AnyType" minOccurs="0" maxOccurs="unbounded"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 *
 */
let CommitmentTypeQualifier = class CommitmentTypeQualifier extends Any {
};
CommitmentTypeQualifier = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.CommitmentTypeQualifier })
], CommitmentTypeQualifier);
let CommitmentTypeQualifiers = class CommitmentTypeQualifiers extends XadesCollection {
};
CommitmentTypeQualifiers = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.CommitmentTypeQualifiers, parser: CommitmentTypeQualifier })
], CommitmentTypeQualifiers);
let ObjectReference = class ObjectReference extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlContent({ required: true })
], ObjectReference.prototype, "Value", void 0);
ObjectReference = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.ObjectReference })
], ObjectReference);
let ObjectReferenceCollection = class ObjectReferenceCollection extends XadesCollection {
};
ObjectReferenceCollection = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: "ObjectReferences", parser: ObjectReference })
], ObjectReferenceCollection);
const XmlAllSignedDataObjectsConverter = {
    set: (value) => {
        // if SignaturePolicyImplied exists then return true
        return true;
    },
    get: (value) => {
        return void 0;
    },
};
let CommitmentTypeIndication = class CommitmentTypeIndication extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlChildElement({
        localName: XmlXades.ElementNames.CommitmentTypeId,
        required: true,
        namespaceURI: XmlXades.NamespaceURI,
        prefix: XmlXades.DefaultPrefix,
        parser: ObjectIdentifier,
    })
], CommitmentTypeIndication.prototype, "CommitmentTypeId", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: ObjectReferenceCollection, noRoot: true })
], CommitmentTypeIndication.prototype, "ObjectReference", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({
        localName: XmlXades.ElementNames.AllSignedDataObjects,
        namespaceURI: XmlXades.NamespaceURI,
        prefix: XmlXades.DefaultPrefix,
        converter: XmlAllSignedDataObjectsConverter,
        defaultValue: false,
    })
], CommitmentTypeIndication.prototype, "AllSignedDataObjects", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ localName: XmlXades.ElementNames.CommitmentTypeQualifiers, parser: CommitmentTypeQualifier })
], CommitmentTypeIndication.prototype, "CommitmentTypeQualifiers", void 0);
CommitmentTypeIndication = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.CommitmentTypeIndication })
], CommitmentTypeIndication);

/**
 *
 * <xsd:element name="SigningCertificate" type="CertIDListType"/>
 * <xsd:complexType name="CertIDListType">
 *     <xsd:sequence>
 *         <xsd:element name="Cert" type="CertIDType" maxOccurs="unbounded"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 * <xsd:complexType name="CertIDType">
 *     <xsd:sequence>
 *         <xsd:element name="CertDigest" type="DigestAlgAndValueType"/>
 *         <xsd:element name="IssuerSerial" type="ds:X509IssuerSerialType"/>
 *     </xsd:sequence>
 *     <xsd:attribute name="URI" type="xsd:anyURI" use="optional"/>
 * </xsd:complexType>
 * <xsd:complexType name="DigestAlgAndValueType">
 *     <xsd:sequence>
 *         <xsd:element ref="ds:DigestMethod"/>
 *         <xsd:element ref="ds:DigestValue"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 *
 */
let DigestAlgAndValueType = class DigestAlgAndValueType extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlChildElement({
        parser: XmlDSigJs.DigestMethod,
        required: true,
    })
], DigestAlgAndValueType.prototype, "DigestMethod", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({
        localName: XmlDSigJs.XmlSignature.ElementNames.DigestValue,
        namespaceURI: XmlDSigJs.XmlSignature.NamespaceURI,
        prefix: XmlDSigJs.XmlSignature.DefaultPrefix,
        converter: XmlCore.XmlBase64Converter,
        required: true,
    })
], DigestAlgAndValueType.prototype, "DigestValue", void 0);
DigestAlgAndValueType = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.DigestAlgAndValue })
], DigestAlgAndValueType);
let IssuerSerial = class IssuerSerial extends XmlDSigJs.X509IssuerSerial {
};
IssuerSerial = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.IssuerSerial, namespaceURI: XmlXades.NamespaceURI, prefix: XmlXades.DefaultPrefix })
], IssuerSerial);
let Cert = class Cert extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlChildElement({ localName: XmlXades.ElementNames.CertDigest, parser: DigestAlgAndValueType, required: true })
], Cert.prototype, "CertDigest", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: IssuerSerial, required: true })
], Cert.prototype, "IssuerSerial", void 0);
tslib_1.__decorate([
    XmlCore.XmlAttribute({ localName: XmlXades.AttributeNames.URI })
], Cert.prototype, "Uri", void 0);
Cert = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.Cert })
], Cert);
let CertIDList = class CertIDList extends XadesCollection {
};
CertIDList = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: "CertIDList", parser: Cert })
], CertIDList);
let SigningCertificate = class SigningCertificate extends CertIDList {
};
SigningCertificate = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.SigningCertificate })
], SigningCertificate);

/**
 *
 * <xsd:element name="CompleteCertificateRefs" type="CompleteCertificateRefsType"/>
 * <xsd:complexType name="CompleteCertificateRefsType">
 *     <xsd:sequence>
 *         <xsd:element name="CertRefs" type="CertIDListType"/>
 *     </xsd:sequence>
 *     <xsd:attribute name="Id" type="xsd:ID" use="optional"/>
 * </xsd:complexType>
 *
 */
let CompleteCertificateRefs = class CompleteCertificateRefs extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlAttribute({ localName: XmlXades.AttributeNames.Id, defaultValue: "" })
], CompleteCertificateRefs.prototype, "Id", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ localName: XmlXades.ElementNames.CertRefs, parser: CertIDList, required: true })
], CompleteCertificateRefs.prototype, "CertRefs", void 0);
CompleteCertificateRefs = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.CompleteCertificateRefs })
], CompleteCertificateRefs);

/*
 * Date Format 3.0.2
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */
const token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g;
const timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
const timezoneClip = /[^-+\dA-Z]/g;
function dateFormat(date, mask, utc, gmt) {
    // You can't provide utc if you skip other args (use the 'UTC:' mask prefix)
    if (arguments.length === 1 && kindOf(date) === "string" && !/\d/.test(date)) {
        mask = date;
        date = undefined;
    }
    date = date || new Date();
    if (!(date instanceof Date)) {
        date = new Date(date);
    }
    if (isNaN(date)) {
        throw TypeError("Invalid date");
    }
    mask = String(masks[mask] || mask || masks.default);
    // Allow setting the utc/gmt argument via the mask
    const maskSlice = mask.slice(0, 4);
    if (maskSlice === "UTC:" || maskSlice === "GMT:") {
        mask = mask.slice(4);
        utc = true;
        if (maskSlice === "GMT:") {
            gmt = true;
        }
    }
    const _ = utc ? "getUTC" : "get";
    const d = date[_ + "Date"]();
    const D = date[_ + "Day"]();
    const m = date[_ + "Month"]();
    const y = date[_ + "FullYear"]();
    const H = date[_ + "Hours"]();
    const M = date[_ + "Minutes"]();
    const s = date[_ + "Seconds"]();
    const L = date[_ + "Milliseconds"]();
    const o = utc ? 0 : date.getTimezoneOffset();
    const W = getWeek(date);
    const N = getDayOfWeek(date);
    const flags = {
        d,
        dd: pad(d),
        ddd: i18n.dayNames[D],
        dddd: i18n.dayNames[D + 7],
        m: m + 1,
        mm: pad(m + 1),
        mmm: i18n.monthNames[m],
        mmmm: i18n.monthNames[m + 12],
        yy: String(y).slice(2),
        yyyy: y,
        h: H % 12 || 12,
        hh: pad(H % 12 || 12),
        H,
        HH: pad(H),
        M,
        MM: pad(M),
        s,
        ss: pad(s),
        l: pad(L, 3),
        L: pad(Math.round(L / 10)),
        t: H < 12 ? i18n.timeNames[0] : i18n.timeNames[1],
        tt: H < 12 ? i18n.timeNames[2] : i18n.timeNames[3],
        T: H < 12 ? i18n.timeNames[4] : i18n.timeNames[5],
        TT: H < 12 ? i18n.timeNames[6] : i18n.timeNames[7],
        Z: gmt ? "GMT" : utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
        o: (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
        // S: ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10],
        W,
        N,
    };
    return mask.replace(token, (match) => {
        if (match in flags) {
            return flags[match];
        }
        return match.slice(1, match.length - 1);
    });
}
const masks = {
    default: "ddd mmm dd yyyy HH:MM:ss",
    shortDate: "m/d/yy",
    mediumDate: "mmm d, yyyy",
    longDate: "mmmm d, yyyy",
    fullDate: "dddd, mmmm d, yyyy",
    shortTime: "h:MM TT",
    mediumTime: "h:MM:ss TT",
    longTime: "h:MM:ss TT Z",
    isoDate: "yyyy-mm-dd",
    isoTime: "HH:MM:ss",
    isoDateTime: "yyyy-mm-dd'T'HH:MM:sso",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
    expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z",
};
// Internationalization strings
const i18n = {
    dayNames: [
        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],
    monthNames: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ],
    timeNames: [
        "a", "p", "am", "pm", "A", "P", "AM", "PM"
    ],
};
function pad(val, len = 2) {
    val = String(val);
    while (val.length < len) {
        val = "0" + val;
    }
    return val;
}
/**
 * Get the ISO 8601 week number
 * Based on comments from
 * http://techblog.procurios.nl/k/n618/news/view/33796/14863/Calculate-ISO-8601-week-and-year-in-javascript.html
 *
 * @param  {Object} `date`
 * @return {Number}
 */
function getWeek(date) {
    // Remove time components of date
    const targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    // Change date to Thursday same week
    targetThursday.setDate(targetThursday.getDate() - ((targetThursday.getDay() + 6) % 7) + 3);
    // Take January 4th as it is always in week 1 (see ISO 8601)
    const firstThursday = new Date(targetThursday.getFullYear(), 0, 4);
    // Change date to Thursday same week
    firstThursday.setDate(firstThursday.getDate() - ((firstThursday.getDay() + 6) % 7) + 3);
    // Check if daylight-saving-time-switch occurred and correct for it
    const ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
    targetThursday.setHours(targetThursday.getHours() - ds);
    // Number of weeks between target Thursday and first Thursday
    const weekDiff = (targetThursday.getTime() - firstThursday.getTime()) / (86400000 * 7);
    return 1 + Math.floor(weekDiff);
}
/**
 * Get ISO-8601 numeric representation of the day of the week
 * 1 (for Monday) through 7 (for Sunday)
 *
 * @param  {Object} `date`
 * @return {Number}
 */
function getDayOfWeek(date) {
    let dow = date.getDay();
    if (dow === 0) {
        dow = 7;
    }
    return dow;
}
/**
 * kind-of shortcut
 * @param  {*} val
 * @return {String}
 */
function kindOf(val) {
    if (val === null) {
        return "null";
    }
    if (val === undefined) {
        return "undefined";
    }
    if (typeof val !== "object") {
        return typeof val;
    }
    if (Array.isArray(val)) {
        return "array";
    }
    return {}.toString.call(val)
        .slice(8, -1).toLowerCase();
}

let XadesDateTime = class XadesDateTime extends XadesObject {
    OnLoadXml(e) {
        if (e.textContent) {
            this.Value = new Date(e.textContent);
        }
    }
    OnGetXml(e) {
        if (this.Format) {
            e.textContent = dateFormat(this.Value, this.Format);
        }
        else {
            e.textContent = this.Value.toISOString();
        }
    }
};
tslib_1.__decorate([
    XmlCore.XmlContent({
        defaultValue: new Date(),
        required: true,
    })
], XadesDateTime.prototype, "Value", void 0);
XadesDateTime = tslib_1.__decorate([
    XmlCore.XmlElement({
        localName: "XadesDateTime",
        namespaceURI: XmlXades.NamespaceURI,
        prefix: XmlXades.DefaultPrefix,
    })
], XadesDateTime);

/**
 *
 * <xsd:element name="CompleteRevocationRefs" type="CompleteRevocationRefsType"/>
 * <xsd:complexType name="CompleteRevocationRefsType">
 *     <xsd:sequence>
 *         <xsd:element name="CRLRefs" type="CRLRefsType" minOccurs="0"/>
 *         <xsd:element name="OCSPRefs" type="OCSPRefsType" minOccurs="0"/>
 *         <xsd:element name="OtherRefs" type="OtherCertStatusRefsType" minOccurs="0"/>
 *     </xsd:sequence>
 *     <xsd:attribute name="Id" type="xsd:ID" use="optional"/>
 * </xsd:complexType>
 * <xsd:complexType name="CRLRefsType">
 *     <xsd:sequence>
 *         <xsd:element name="CRLRef" type="CRLRefType" maxOccurs="unbounded"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 * <xsd:complexType name="CRLRefType">
 *     <xsd:sequence>
 *         <xsd:element name="DigestAlgAndValue" type="DigestAlgAndValueType"/>
 *         <xsd:element name="CRLIdentifier" type="CRLIdentifierType" minOccurs="0"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 * <xsd:complexType name="CRLIdentifierType">
 *     <xsd:sequence>
 *         <xsd:element name="Issuer" type="xsd:string"/>
 *         <xsd:element name="IssueTime" type="xsd:dateTime"/>
 *         <xsd:element name="Number" type="xsd:integer" minOccurs="0"/>
 *     </xsd:sequence>
 *     <xsd:attribute name="URI" type="xsd:anyURI" use="optional"/>
 * </xsd:complexType>
 * <xsd:complexType name="OCSPRefsType">
 *     <xsd:sequence>
 *         <xsd:element name="OCSPRef" type="OCSPRefType" maxOccurs="unbounded"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 * <xsd:complexType name="OCSPRefType">
 *     <xsd:sequence>
 *         <xsd:element name="OCSPIdentifier" type="OCSPIdentifierType"/>
 *         <xsd:element name="DigestAlgAndValue" type="DigestAlgAndValueType" minOccurs="0"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 * <xsd:complexType name="ResponderIDType">
 *     <xsd:choice>
 *         <xsd:element name="ByName" type="xsd:string"/>
 *         <xsd:element name="ByKey" type="xsd:base64Binary"/>
 *     </xsd:choice>
 * </xsd:complexType>
 * <xsd:complexType name="OCSPIdentifierType">
 *     <xsd:sequence>
 *         <xsd:element name="ResponderID" type="ResponderIDType"/>
 *         <xsd:element name="ProducedAt" type="xsd:dateTime"/>
 *     </xsd:sequence>
 *     <xsd:attribute name="URI" type="xsd:anyURI" use="optional"/>
 * </xsd:complexType>
 * <xsd:complexType name="OtherCertStatusRefsType">
 *     <xsd:sequence>
 *         <xsd:element name="OtherRef" type="AnyType" maxOccurs="unbounded"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 *
 */
let OtherRef = class OtherRef extends Any {
};
OtherRef = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.OtherRef })
], OtherRef);
let OtherRefs = class OtherRefs extends XadesCollection {
};
OtherRefs = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.OtherRefs })
], OtherRefs);
let ResponderID = class ResponderID extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlChildElement({
        localName: XmlXades.ElementNames.ByName,
        namespaceURI: XmlXades.NamespaceURI,
        prefix: XmlXades.DefaultPrefix,
        required: true,
    })
], ResponderID.prototype, "ByName", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({
        localName: XmlXades.ElementNames.ByKey,
        namespaceURI: XmlXades.NamespaceURI,
        prefix: XmlXades.DefaultPrefix,
        converter: XmlCore.XmlBase64Converter,
        required: true,
    })
], ResponderID.prototype, "ByKey", void 0);
ResponderID = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.OCSPIdentifier })
], ResponderID);
let OCSPIdentifier = class OCSPIdentifier extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlAttribute({ localName: XmlXades.AttributeNames.URI, defaultValue: "" })
], OCSPIdentifier.prototype, "URI", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: ResponderID, required: true })
], OCSPIdentifier.prototype, "ResponderID", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({
        localName: XmlXades.ElementNames.IssueTime,
        parser: XadesDateTime,
        required: true,
    })
], OCSPIdentifier.prototype, "ProducedAt", void 0);
OCSPIdentifier = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.OCSPIdentifier })
], OCSPIdentifier);
let OCSPRef = class OCSPRef extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: OCSPIdentifier })
], OCSPRef.prototype, "OCSPIdentifier", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: DigestAlgAndValueType, required: true })
], OCSPRef.prototype, "DigestAlgAndValue", void 0);
OCSPRef = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.OCSPRef })
], OCSPRef);
let OCSPRefs = class OCSPRefs extends XadesCollection {
};
OCSPRefs = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.OCSPRefs })
], OCSPRefs);
let CRLIdentifier = class CRLIdentifier extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlAttribute({ localName: XmlXades.AttributeNames.URI, defaultValue: "" })
], CRLIdentifier.prototype, "URI", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({
        localName: XmlXades.ElementNames.Issuer,
        namespaceURI: XmlXades.NamespaceURI,
        prefix: XmlXades.DefaultPrefix,
        required: true,
    })
], CRLIdentifier.prototype, "Issuer", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({
        localName: XmlXades.ElementNames.IssueTime,
        parser: XadesDateTime,
        required: true,
    })
], CRLIdentifier.prototype, "IssueTime", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({
        localName: XmlXades.ElementNames.Number,
        namespaceURI: XmlXades.NamespaceURI,
        prefix: XmlXades.DefaultPrefix,
        converter: XmlCore.XmlNumberConverter,
    })
], CRLIdentifier.prototype, "Number", void 0);
CRLIdentifier = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.CRLIdentifier })
], CRLIdentifier);
let CRLRef = class CRLRef extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: DigestAlgAndValueType, required: true })
], CRLRef.prototype, "DigestAlgAndValue", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: CRLIdentifier })
], CRLRef.prototype, "CRLIdentifier", void 0);
CRLRef = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.CRLRef })
], CRLRef);
let CRLRefs = class CRLRefs extends XadesCollection {
};
CRLRefs = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.CRLRefs })
], CRLRefs);
let CompleteRevocationRefs = class CompleteRevocationRefs extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlAttribute({ localName: XmlXades.AttributeNames.Id, defaultValue: "" })
], CompleteRevocationRefs.prototype, "Id", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: CRLRefs })
], CompleteRevocationRefs.prototype, "CRLRefs", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: OCSPRefs })
], CompleteRevocationRefs.prototype, "OCSPRefs", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: OtherRefs })
], CompleteRevocationRefs.prototype, "OtherRefs", void 0);
CompleteRevocationRefs = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.CompleteRevocationRefs })
], CompleteRevocationRefs);

/**
 *
 * <xsd:element name="CounterSignature" type="CounterSignatureType"/>
 * <xsd:complexType name="CounterSignatureType">
 *     <xsd:sequence>
 *         <xsd:element ref="ds:Signature"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 *
 */
let CounterSignature = class CounterSignature extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: XmlDSigJs.Signature, required: true })
], CounterSignature.prototype, "Signature", void 0);
CounterSignature = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.CounterSignature })
], CounterSignature);

/**
 *
 * <xsd:element name="DataObjectFormat" type="DataObjectFormatType"/>
 * <xsd:complexType name="DataObjectFormatType">
 *     <xsd:sequence>
 *         <xsd:element name="Description" type="xsd:string" minOccurs="0"/>
 *         <xsd:element name="ObjectIdentifier" type="ObjectIdentifierType" minOccurs="0"/>
 *         <xsd:element name="MimeType" type="xsd:string" minOccurs="0"/>
 *         <xsd:element name="Encoding" type="xsd:anyURI" minOccurs="0"/>
 *     </xsd:sequence>
 *     <xsd:attribute name="ObjectReference" type="xsd:anyURI" use="required"/>
 * </xsd:complexType>
 *
 */
let DataObjectFormat = class DataObjectFormat extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlAttribute({ localName: XmlXades.AttributeNames.ObjectReference, required: true })
], DataObjectFormat.prototype, "ObjectReference", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ localName: XmlXades.ElementNames.Description, namespaceURI: XmlXades.NamespaceURI, prefix: XmlXades.DefaultPrefix })
], DataObjectFormat.prototype, "Description", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: ObjectIdentifier })
], DataObjectFormat.prototype, "ObjectIdentifier", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ localName: XmlXades.ElementNames.MimeType, namespaceURI: XmlXades.NamespaceURI, prefix: XmlXades.DefaultPrefix })
], DataObjectFormat.prototype, "MimeType", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ localName: XmlXades.ElementNames.Encoding, namespaceURI: XmlXades.NamespaceURI, prefix: XmlXades.DefaultPrefix })
], DataObjectFormat.prototype, "Encoding", void 0);
DataObjectFormat = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.DataObjectFormat })
], DataObjectFormat);

/**
 *
 * <xsd:element name="Include" type="IncludeType"/>
 * <xsd:complexType name="IncludeType">
 *   <xsd:attribute name="URI" type="xsd:anyURI" use="required"/>
 *   <xsd:attribute name="referencedData" type="xsd:boolean" use="optional"/>
 * </xsd:complexType>
 * <xsd:element name="ReferenceInfo" type="ReferenceInfoType"/>
 * <xsd:complexType name="ReferenceInfoType">
 *   <xsd:sequence>
 *     <xsd:element ref="ds:DigestMethod"/>
 *     <xsd:element ref="ds:DigestValue"/>
 *   </xsd:sequence>
 *   <xsd:attribute name="Id" type="xsd:ID" use="optional"/>
 *   <xsd:attribute name="URI" type="xsd:anyURI" use="optional"/>
 * </xsd:complexType>
 * <xsd:complexType name="GenericTimeStampType" abstract="true">
 *   <xsd:sequence>
 *     <xsd:choice minOccurs="0">
 *       <xsd:element ref="Include" minOccurs="0" maxOccurs="unbounded"/>
 *       <xsd:element ref="ReferenceInfo" maxOccurs="unbounded"/>
 *     </xsd:choice>
 *     <xsd:element ref="ds:CanonicalizationMethod" minOccurs="0"/>
 *     <xsd:choice maxOccurs="unbounded">
 *       <xsd:element name="EncapsulatedTimeStamp" type="EncapsulatedPKIDataType"/>
 *       <xsd:element name="XMLTimeStamp" type="AnyType"/>
 *     </xsd:choice>
 *   </xsd:sequence>
 *   <xsd:attribute name="Id" type="xsd:ID" use="optional"/>
 * </xsd:complexType>
 *
 */
let Include = class Include extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlAttribute({
        localName: XmlXades.AttributeNames.URI,
        defaultValue: "",
        required: true,
    })
], Include.prototype, "Uri", void 0);
tslib_1.__decorate([
    XmlCore.XmlAttribute({
        localName: XmlXades.AttributeNames.ReferencedData,
        defaultValue: false,
    })
], Include.prototype, "ReferencedData", void 0);
Include = tslib_1.__decorate([
    XmlCore.XmlElement({
        localName: XmlXades.ElementNames.Include,
    })
], Include);
let ReferenceInfo = class ReferenceInfo extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlAttribute({ localName: XmlXades.AttributeNames.URI, defaultValue: "" })
], ReferenceInfo.prototype, "Uri", void 0);
tslib_1.__decorate([
    XmlCore.XmlAttribute({ localName: XmlXades.AttributeNames.Id, defaultValue: "" })
], ReferenceInfo.prototype, "Id", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({
        localName: XmlDSigJs.XmlSignature.ElementNames.DigestMethod,
        namespaceURI: XmlDSigJs.XmlSignature.NamespaceURI,
        prefix: XmlDSigJs.XmlSignature.DefaultPrefix,
        required: true,
    })
], ReferenceInfo.prototype, "DigestMethod", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({
        localName: XmlDSigJs.XmlSignature.ElementNames.DigestMethod,
        namespaceURI: XmlDSigJs.XmlSignature.NamespaceURI,
        prefix: XmlDSigJs.XmlSignature.DefaultPrefix,
        converter: XmlCore.XmlBase64Converter,
        required: true,
    })
], ReferenceInfo.prototype, "DigestValue", void 0);
ReferenceInfo = tslib_1.__decorate([
    XmlCore.XmlElement({
        localName: XmlXades.ElementNames.ReferenceInfo,
    })
], ReferenceInfo);
let ReferenceInfos = class ReferenceInfos extends XadesCollection {
};
ReferenceInfos = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: "ReferenceInfos", parser: ReferenceInfo })
], ReferenceInfos);
let EncapsulatedTimeStamp = class EncapsulatedTimeStamp extends EncapsulatedPKIData {
};
EncapsulatedTimeStamp = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.EncapsulatedTimeStamp })
], EncapsulatedTimeStamp);
let EncapsulatedTimeStampCollection = class EncapsulatedTimeStampCollection extends XadesCollection {
};
EncapsulatedTimeStampCollection = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: "EncapsulatedPKIDatas", parser: EncapsulatedTimeStamp })
], EncapsulatedTimeStampCollection);
let XMLTimeStamp = class XMLTimeStamp extends Any {
};
XMLTimeStamp = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.XMLTimeStamp })
], XMLTimeStamp);
let XMLTimeStampCollection = class XMLTimeStampCollection extends XadesCollection {
};
XMLTimeStampCollection = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: "XMLTimeStampCollection", parser: XMLTimeStamp })
], XMLTimeStampCollection);
let GenericTimeStamp = class GenericTimeStamp extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlAttribute({ localName: XmlXades.AttributeNames.Id, defaultValue: "" })
], GenericTimeStamp.prototype, "Id", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: Include })
], GenericTimeStamp.prototype, "Include", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: ReferenceInfos, noRoot: true })
], GenericTimeStamp.prototype, "ReferenceInfo", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: XmlDSigJs.CanonicalizationMethod })
], GenericTimeStamp.prototype, "CanonicalizationMethod", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: EncapsulatedTimeStampCollection, noRoot: true })
], GenericTimeStamp.prototype, "EncapsulatedTimeStamp", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: XMLTimeStampCollection, noRoot: true })
], GenericTimeStamp.prototype, "XMLTimeStamp", void 0);
GenericTimeStamp = tslib_1.__decorate([
    XmlCore.XmlElement({
        localName: "GenericTimeStamp",
    })
], GenericTimeStamp);

/**
 *
 * <xsd:element name="OtherTimeStamp" type="OtherTimeStampType"/>
 * <xsd:complexType name="OtherTimeStampType">
 *     <xsd:complexContent>
 *         <xsd:restriction base="GenericTimeStampType">
 *             <xsd:sequence>
 *                 <xsd:element ref="ReferenceInfo" maxOccurs="unbounded"/>
 *                 <xsd:element ref="ds:CanonicalizationMethod" minOccurs="0"/>
 *                 <xsd:choice>
 *                     <xsd:element name="EncapsulatedTimeStamp" type="EncapsulatedPKIDataType"/>
 *                     <xsd:element name="XMLTimeStamp" type="AnyType"/>
 *                 </xsd:choice>
 *             </xsd:sequence>
 *             <xsd:attribute name="Id" type="xsd:ID" use="optional"/>
 *         </xsd:restriction>
 *     </xsd:complexContent>
 * </xsd:complexType>
 *
 */
let OtherTimeStamp = class OtherTimeStamp extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlAttribute({ localName: XmlXades.AttributeNames.Id, defaultValue: "" })
], OtherTimeStamp.prototype, "Id", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: ReferenceInfos, noRoot: true })
], OtherTimeStamp.prototype, "ReferenceInfo", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: XmlDSigJs.CanonicalizationMethod })
], OtherTimeStamp.prototype, "CanonicalizationMethod", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: EncapsulatedTimeStampCollection, noRoot: true })
], OtherTimeStamp.prototype, "EncapsulatedTimeStamp", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: XMLTimeStampCollection, noRoot: true })
], OtherTimeStamp.prototype, "XMLTimeStamp", void 0);
OtherTimeStamp = tslib_1.__decorate([
    XmlCore.XmlElement({
        localName: XmlXades.ElementNames.OtherTimeStamp,
    })
], OtherTimeStamp);

/**
 *
 * <xsd:element name="XAdESTimeStamp" type="XAdESTimeStampType"/>
 * <xsd:complexType name="XAdESTimeStampType">
 *     <xsd:complexContent>
 *         <xsd:restriction base="GenericTimeStampType">
 *             <xsd:sequence>
 *                 <xsd:element ref="Include" minOccurs="0" maxOccurs="unbounded"/>
 *                 <xsd:element ref="ds:CanonicalizationMethod" minOccurs="0"/>
 *                 <xsd:choice maxOccurs="unbounded">
 *                     <xsd:element name="EncapsulatedTimeStamp" type="EncapsulatedPKIDataType"/>
 *                     <xsd:element name="XMLTimeStamp" type="AnyType"/>
 *                 </xsd:choice>
 *             </xsd:sequence>
 *             <xsd:attribute name="Id" type="xsd:ID" use="optional"/>
 *         </xsd:restriction>
 *     </xsd:complexContent>
 * </xsd:complexType>
 *
 */
let XAdESTimeStamp = class XAdESTimeStamp extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlAttribute({ localName: XmlXades.AttributeNames.Id, defaultValue: "" })
], XAdESTimeStamp.prototype, "Id", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: Include })
], XAdESTimeStamp.prototype, "Include", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: XmlDSigJs.CanonicalizationMethod })
], XAdESTimeStamp.prototype, "CanonicalizationMethod", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: EncapsulatedTimeStampCollection, noRoot: true })
], XAdESTimeStamp.prototype, "EncapsulatedTimeStamp", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: XMLTimeStampCollection, noRoot: true })
], XAdESTimeStamp.prototype, "XMLTimeStamp", void 0);
XAdESTimeStamp = tslib_1.__decorate([
    XmlCore.XmlElement({
        localName: XmlXades.ElementNames.XAdESTimeStamp,
    })
], XAdESTimeStamp);

/**
 *
 * <xsd:element name="SignedDataObjectProperties" type="SignedDataObjectPropertiesType"/>
 * <xsd:complexType name="SignedDataObjectPropertiesType">
 *     <xsd:sequence>
 *         <xsd:element name="DataObjectFormat" type="DataObjectFormatType" minOccurs="0" maxOccurs="unbounded"/>
 *         <xsd:element name="CommitmentTypeIndication" type="CommitmentTypeIndicationType" minOccurs="0" maxOccurs="unbounded"/>
 *         <xsd:element name="AllDataObjectsTimeStamp" type="XAdESTimeStampType" minOccurs="0" maxOccurs="unbounded"/>
 *         <xsd:element name="IndividualDataObjectsTimeStamp" type="XAdESTimeStampType" minOccurs="0" maxOccurs="unbounded"/>
 *     </xsd:sequence>
 *     <xsd:attribute name="Id" type="xsd:ID" use="optional"/>
 * </xsd:complexType>
 *
 */
let IndividualDataObjectsTimeStamp = class IndividualDataObjectsTimeStamp extends XAdESTimeStamp {
};
IndividualDataObjectsTimeStamp = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.IndividualDataObjectsTimeStamp })
], IndividualDataObjectsTimeStamp);
let IndividualDataObjectsTimeStampCollection = class IndividualDataObjectsTimeStampCollection extends XadesCollection {
};
IndividualDataObjectsTimeStampCollection = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: "IndividualDataObjectsTimeStampCollection", parser: IndividualDataObjectsTimeStamp })
], IndividualDataObjectsTimeStampCollection);
let AllDataObjectsTimeStamp = class AllDataObjectsTimeStamp extends XAdESTimeStamp {
};
AllDataObjectsTimeStamp = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.AllDataObjectsTimeStamp })
], AllDataObjectsTimeStamp);
let DataObjectFormatCollection = class DataObjectFormatCollection extends XadesCollection {
};
DataObjectFormatCollection = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: "DataObjectFormatCollection", parser: DataObjectFormat })
], DataObjectFormatCollection);
let CommitmentTypeIndicationCollection = class CommitmentTypeIndicationCollection extends XadesCollection {
};
CommitmentTypeIndicationCollection = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: "CommitmentTypeIndicationCollection", parser: CommitmentTypeIndication })
], CommitmentTypeIndicationCollection);
let AllDataObjectsTimeStampCollection = class AllDataObjectsTimeStampCollection extends XadesCollection {
};
AllDataObjectsTimeStampCollection = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: "AllDataObjectsTimeStampCollection", parser: AllDataObjectsTimeStamp })
], AllDataObjectsTimeStampCollection);
let SignedDataObjectProperties = class SignedDataObjectProperties extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlAttribute({ localName: XmlXades.AttributeNames.Id, defaultValue: "" })
], SignedDataObjectProperties.prototype, "Id", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: DataObjectFormatCollection, noRoot: true })
], SignedDataObjectProperties.prototype, "DataObjectFormats", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: CommitmentTypeIndicationCollection, noRoot: true })
], SignedDataObjectProperties.prototype, "CommitmentTypeIndications", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: AllDataObjectsTimeStampCollection, noRoot: true })
], SignedDataObjectProperties.prototype, "AllDataObjectsTimeStamps", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: IndividualDataObjectsTimeStampCollection, noRoot: true })
], SignedDataObjectProperties.prototype, "IndividualDataObjectsTimeStamps", void 0);
SignedDataObjectProperties = tslib_1.__decorate([
    XmlCore.XmlElement({
        localName: XmlXades.ElementNames.SignedDataObjectProperties,
    })
], SignedDataObjectProperties);

/**
 *
 * <xsd:element name="SignaturePolicyIdentifier" type="SignaturePolicyIdentifierType"/>
 * <xsd:complexType name="SignaturePolicyIdentifierType">
 *     <xsd:choice>
 *         <xsd:element name="SignaturePolicyId" type="SignaturePolicyIdType"/>
 *         <xsd:element name="SignaturePolicyImplied"/>
 *     </xsd:choice>
 * </xsd:complexType>
 * <xsd:complexType name="SignaturePolicyIdType">
 *     <xsd:sequence>
 *         <xsd:element name="SigPolicyId" type="ObjectIdentifierType"/>
 *         <xsd:element ref="ds:Transforms" minOccurs="0"/>
 *         <xsd:element name="SigPolicyHash" type="DigestAlgAndValueType"/>
 *         <xsd:element name="SigPolicyQualifiers" type="SigPolicyQualifiersListType" minOccurs="0"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 * <xsd:complexType name="SigPolicyQualifiersListType">
 *     <xsd:sequence>
 *         <xsd:element name="SigPolicyQualifier" type="AnyType" maxOccurs="unbounded"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 * <xsd:element name="SPURI" type="xsd:anyURI"/>
 * <xsd:element name="SPUserNotice" type="SPUserNoticeType"/>
 * <xsd:complexType name="SPUserNoticeType">
 *     <xsd:sequence>
 *         <xsd:element name="NoticeRef" type="NoticeReferenceType" minOccurs="0"/>
 *         <xsd:element name="ExplicitText" type="xsd:string" minOccurs="0"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 * <xsd:complexType name="NoticeReferenceType">
 *     <xsd:sequence>
 *         <xsd:element name="Organization" type="xsd:string"/>
 *         <xsd:element name="NoticeNumbers" type="IntegerListType"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 * <xsd:complexType name="IntegerListType">
 *     <xsd:sequence>
 *         <xsd:element name="int" type="xsd:integer" minOccurs="0" maxOccurs="unbounded"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 *
 */
let SigPolicyId = class SigPolicyId extends ObjectIdentifier {
};
SigPolicyId = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.SigPolicyId })
], SigPolicyId);
let SigPolicyHash = class SigPolicyHash extends DigestAlgAndValueType {
};
SigPolicyHash = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.SigPolicyHash })
], SigPolicyHash);
let SigPolicyQualifier = class SigPolicyQualifier extends AnyCollection {
};
SigPolicyQualifier = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.SigPolicyQualifier })
], SigPolicyQualifier);
let Integer = class Integer extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlContent({ converter: XmlCore.XmlNumberConverter, required: true })
], Integer.prototype, "Value", void 0);
Integer = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: "int" })
], Integer);
let IntegerList = class IntegerList extends XadesCollection {
};
IntegerList = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: "IntegerList", parser: Integer })
], IntegerList);
let NoticeReference = class NoticeReference extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlChildElement({
        localName: XmlXades.ElementNames.Organization,
        namespaceURI: XmlXades.NamespaceURI,
        prefix: XmlXades.DefaultPrefix,
        required: true,
    })
], NoticeReference.prototype, "Organization", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ localName: XmlXades.ElementNames.NoticeNumbers, parser: IntegerList, required: true })
], NoticeReference.prototype, "NoticeNumbers", void 0);
NoticeReference = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.NoticeRef })
], NoticeReference);
let SPUserNotice = class SPUserNotice extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlChildElement({ localName: XmlXades.ElementNames.NoticeRef, parser: NoticeReference })
], SPUserNotice.prototype, "NoticeRef", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({
        localName: XmlXades.ElementNames.ExplicitText,
        namespaceURI: XmlXades.NamespaceURI,
        prefix: XmlXades.DefaultPrefix,
    })
], SPUserNotice.prototype, "ExplicitText", void 0);
SPUserNotice = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.SPUserNotice })
], SPUserNotice);
let SPURI = class SPURI extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlContent()
], SPURI.prototype, "Value", void 0);
SPURI = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.SPURI })
], SPURI);
let SigPolicyQualifiers = class SigPolicyQualifiers extends XadesCollection {
};
SigPolicyQualifiers = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.SigPolicyQualifiers, parser: SigPolicyQualifier })
], SigPolicyQualifiers);
let SignaturePolicyId = class SignaturePolicyId extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlChildElement({ localName: XmlXades.ElementNames.SigPolicyId, parser: SigPolicyId, required: true })
], SignaturePolicyId.prototype, "SigPolicyId", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: XmlDSigJs.Transforms })
], SignaturePolicyId.prototype, "Transforms", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ localName: XmlXades.ElementNames.SigPolicyHash, parser: SigPolicyHash, required: true })
], SignaturePolicyId.prototype, "SigPolicyHash", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ localName: XmlXades.ElementNames.SigPolicyQualifiers, parser: SigPolicyQualifiers })
], SignaturePolicyId.prototype, "SigPolicyQualifiers", void 0);
SignaturePolicyId = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.SignaturePolicyId })
], SignaturePolicyId);
const XmlSignaturePolicyImpliedConverter = {
    set: (value) => {
        // if SignaturePolicyImplied exists then return true
        return true;
    },
    get: (value) => {
        return "";
    },
};
let SignaturePolicyIdentifier = class SignaturePolicyIdentifier extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlChildElement({
        localName: XmlXades.ElementNames.SignaturePolicyId,
        namespaceURI: XmlXades.NamespaceURI,
        prefix: XmlXades.DefaultPrefix,
        parser: SignaturePolicyId,
    })
], SignaturePolicyIdentifier.prototype, "SignaturePolicyId", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({
        localName: XmlXades.ElementNames.SignaturePolicyImplied,
        namespaceURI: XmlXades.NamespaceURI,
        prefix: XmlXades.DefaultPrefix,
        converter: XmlSignaturePolicyImpliedConverter,
        defaultValue: false,
    })
], SignaturePolicyIdentifier.prototype, "SignaturePolicyImplied", void 0);
SignaturePolicyIdentifier = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.SignaturePolicyIdentifier })
], SignaturePolicyIdentifier);

/**
 *
 * <xsd:element name="SignatureProductionPlace" type="SignatureProductionPlaceType"/>
 * <xsd:complexType name="SignatureProductionPlaceType">
 *     <xsd:sequence>
 *         <xsd:element name="City" type="xsd:string" minOccurs="0"/>
 *         <xsd:element name="StateOrProvince" type="xsd:string" minOccurs="0"/>
 *         <xsd:element name="PostalCode" type="xsd:string" minOccurs="0"/>
 *         <xsd:element name="CountryName" type="xsd:string" minOccurs="0"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 *
 */
let SignatureProductionPlace = class SignatureProductionPlace extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlChildElement({
        localName: XmlXades.ElementNames.City,
        defaultValue: "",
        namespaceURI: XmlXades.NamespaceURI,
        prefix: XmlXades.DefaultPrefix,
    })
], SignatureProductionPlace.prototype, "City", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({
        localName: XmlXades.ElementNames.StateOrProvince,
        defaultValue: "",
        namespaceURI: XmlXades.NamespaceURI,
        prefix: XmlXades.DefaultPrefix,
    })
], SignatureProductionPlace.prototype, "StateOrProvince", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({
        localName: XmlXades.ElementNames.PostalCode,
        defaultValue: "",
        namespaceURI: XmlXades.NamespaceURI,
        prefix: XmlXades.DefaultPrefix,
    })
], SignatureProductionPlace.prototype, "PostalCode", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({
        localName: XmlXades.ElementNames.CountryName,
        defaultValue: "",
        namespaceURI: XmlXades.NamespaceURI,
        prefix: XmlXades.DefaultPrefix,
    })
], SignatureProductionPlace.prototype, "CountryName", void 0);
SignatureProductionPlace = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.SignatureProductionPlace })
], SignatureProductionPlace);

/**
 *
 * <xsd:element name="SignerRole" type="SignerRoleType"/>
 * <xsd:complexType name="SignerRoleType">
 *     <xsd:sequence>
 *         <xsd:element name="ClaimedRoles" type="ClaimedRolesListType" minOccurs="0"/>
 *         <xsd:element name="CertifiedRoles" type="CertifiedRolesListType" minOccurs="0"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 * <xsd:complexType name="ClaimedRolesListType">
 *     <xsd:sequence>
 *         <xsd:element name="ClaimedRole" type="AnyType" maxOccurs="unbounded"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 * <xsd:complexType name="CertifiedRolesListType">
 *     <xsd:sequence>
 *         <xsd:element name="CertifiedRole" type="EncapsulatedPKIDataType" maxOccurs="unbounded"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 *
 */
let ClaimedRole = class ClaimedRole extends Any {
};
ClaimedRole = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.ClaimedRole })
], ClaimedRole);
let ClaimedRoles = class ClaimedRoles extends XadesCollection {
};
ClaimedRoles = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.ClaimedRoles, parser: ClaimedRole })
], ClaimedRoles);
let CertifiedRole = class CertifiedRole extends EncapsulatedPKIData {
};
CertifiedRole = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.CertifiedRole })
], CertifiedRole);
let CertifiedRoles = class CertifiedRoles extends XadesCollection {
};
CertifiedRoles = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.CertifiedRoles, parser: CertifiedRole })
], CertifiedRoles);
let SignerRole = class SignerRole extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: ClaimedRoles })
], SignerRole.prototype, "ClaimedRoles", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: CertifiedRoles })
], SignerRole.prototype, "CertifiedRoles", void 0);
SignerRole = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.SignerRole })
], SignerRole);

/**
 *
 * <xsd:element name="SignedSignatureProperties" type="SignedSignaturePropertiesType"/>
 * <xsd:complexType name="SignedSignaturePropertiesType">
 *     <xsd:sequence>
 *         <xsd:element name="SigningTime" type="xsd:dateTime" minOccurs="0"/>
 *         <xsd:element name="SigningCertificate" type="CertIDListType" minOccurs="0"/>
 *         <xsd:element name="SignaturePolicyIdentifier" type="SignaturePolicyIdentifierType" minOccurs="0"/>
 *         <xsd:element name="SignatureProductionPlace" type="SignatureProductionPlaceType" minOccurs="0"/>
 *         <xsd:element name="SignerRole" type="SignerRoleType" minOccurs="0"/>
 *     </xsd:sequence>
 *     <xsd:attribute name="Id" type="xsd:ID" use="optional"/>
 * </xsd:complexType>
 *
 */
let SignedSignatureProperties = class SignedSignatureProperties extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlAttribute({ localName: XmlXades.AttributeNames.Id, defaultValue: "" })
], SignedSignatureProperties.prototype, "Id", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({
        localName: XmlXades.ElementNames.SigningTime,
        parser: XadesDateTime,
    })
], SignedSignatureProperties.prototype, "SigningTime", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: SigningCertificate })
], SignedSignatureProperties.prototype, "SigningCertificate", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: SignaturePolicyIdentifier })
], SignedSignatureProperties.prototype, "SignaturePolicyIdentifier", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: SignatureProductionPlace })
], SignedSignatureProperties.prototype, "SignatureProductionPlace", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: SignerRole })
], SignedSignatureProperties.prototype, "SignerRole", void 0);
SignedSignatureProperties = tslib_1.__decorate([
    XmlCore.XmlElement({
        localName: XmlXades.ElementNames.SignedSignatureProperties,
    })
], SignedSignatureProperties);

/**
 *
 * <xsd:element name="SignedProperties" type="SignedPropertiesType"/>
 * <xsd:complexType name="SignedPropertiesType">
 *     <xsd:sequence>
 *         <xsd:element name="SignedSignatureProperties" type="SignedSignaturePropertiesType" minOccurs="0"/>
 *         <xsd:element name="SignedDataObjectProperties" type="SignedDataObjectPropertiesType" minOccurs="0"/>
 *     </xsd:sequence>
 *     <xsd:attribute name="Id" type="xsd:ID" use="optional"/>
 * </xsd:complexType>
 *
 */
let SignedProperties = class SignedProperties extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlAttribute({ localName: XmlXades.AttributeNames.Id, defaultValue: "" })
], SignedProperties.prototype, "Id", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: SignedSignatureProperties })
], SignedProperties.prototype, "SignedSignatureProperties", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: SignedDataObjectProperties })
], SignedProperties.prototype, "SignedDataObjectProperties", void 0);
SignedProperties = tslib_1.__decorate([
    XmlCore.XmlElement({
        localName: XmlXades.ElementNames.SignedProperties,
    })
], SignedProperties);

/**
 *
 * <xsd:element name="UnsignedDataObjectProperties" type="UnsignedDataObjectPropertiesType"/>
 * <xsd:complexType name="UnsignedDataObjectPropertiesType">
 *     <xsd:sequence>
 *         <xsd:element name="UnsignedDataObjectProperty" type="AnyType" maxOccurs="unbounded"/>
 *     </xsd:sequence>
 *     <xsd:attribute name="Id" type="xsd:ID" use="optional"/>
 * </xsd:complexType>
 *
 */
let UnsignedDataObjectProperty = class UnsignedDataObjectProperty extends Any {
};
UnsignedDataObjectProperty = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.UnsignedDataObjectProperty })
], UnsignedDataObjectProperty);
let UnsignedDataObjectProperties = class UnsignedDataObjectProperties extends XadesCollection {
};
tslib_1.__decorate([
    XmlCore.XmlAttribute({ localName: XmlXades.AttributeNames.Id, defaultValue: "" })
], UnsignedDataObjectProperties.prototype, "Id", void 0);
UnsignedDataObjectProperties = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.UnsignedSignatureProperties, parser: UnsignedDataObjectProperty })
], UnsignedDataObjectProperties);

/**
 *
 * <xsd:element name="RevocationValues" type="RevocationValuesType"/>
 * <xsd:complexType name="RevocationValuesType">
 *     <xsd:sequence>
 *         <xsd:element name="CRLValues" type="CRLValuesType" minOccurs="0"/>
 *         <xsd:element name="OCSPValues" type="OCSPValuesType" minOccurs="0"/>
 *         <xsd:element name="OtherValues" type="OtherCertStatusValuesType" minOccurs="0"/>
 *     </xsd:sequence>
 *     <xsd:attribute name="Id" type="xsd:ID" use="optional"/>
 * </xsd:complexType>
 * <xsd:complexType name="CRLValuesType">
 *     <xsd:sequence>
 *         <xsd:element name="EncapsulatedCRLValue" type="EncapsulatedPKIDataType" maxOccurs="unbounded"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 * <xsd:complexType name="OCSPValuesType">
 *     <xsd:sequence>
 *         <xsd:element name="EncapsulatedOCSPValue" type="EncapsulatedPKIDataType" maxOccurs="unbounded"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 * <xsd:complexType name="OtherCertStatusValuesType">
 *     <xsd:sequence>
 *         <xsd:element name="OtherValue" type="AnyType" maxOccurs="unbounded"/>
 *     </xsd:sequence>
 * </xsd:complexType>
 *
 */
let OtherValue = class OtherValue extends EncapsulatedPKIData {
};
OtherValue = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.OtherValue })
], OtherValue);
let OtherValues = class OtherValues extends XadesCollection {
};
OtherValues = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.OCSPValues, parser: OtherValue })
], OtherValues);
let EncapsulatedOCSPValue = class EncapsulatedOCSPValue extends EncapsulatedPKIData {
};
EncapsulatedOCSPValue = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.EncapsulatedOCSPValue })
], EncapsulatedOCSPValue);
let OCSPValues = class OCSPValues extends XadesCollection {
};
OCSPValues = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.OCSPValues })
], OCSPValues);
let EncapsulatedCRLValue = class EncapsulatedCRLValue extends EncapsulatedPKIData {
};
EncapsulatedCRLValue = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.EncapsulatedCRLValue })
], EncapsulatedCRLValue);
let CRLValues = class CRLValues extends XadesCollection {
};
CRLValues = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.CRLValues, parser: EncapsulatedCRLValue })
], CRLValues);
let RevocationValues = class RevocationValues extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlAttribute({ localName: XmlXades.AttributeNames.Id, defaultValue: "" })
], RevocationValues.prototype, "Id", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: CRLValues })
], RevocationValues.prototype, "CRLValues", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: OCSPValues })
], RevocationValues.prototype, "OCSPValues", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: OtherValues })
], RevocationValues.prototype, "OtherValues", void 0);
RevocationValues = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.RevocationValues })
], RevocationValues);

/**
 *
 * <xsd:element name="UnsignedSignatureProperties" type="UnsignedSignaturePropertiesType"/>
 * <xsd:complexType name="UnsignedSignaturePropertiesType">
 *     <xsd:choice maxOccurs="unbounded">
 *         <xsd:element name="CounterSignature" type="CounterSignatureType"/>
 *         <xsd:element name="SignatureTimeStamp" type="XAdESTimeStampType"/>
 *         <xsd:element name="CompleteCertificateRefs" type="CompleteCertificateRefsType"/>
 *         <xsd:element name="CompleteRevocationRefs" type="CompleteRevocationRefsType"/>
 *         <xsd:element name="AttributeCertificateRefs" type="CompleteCertificateRefsType"/>
 *         <xsd:element name="AttributeRevocationRefs" type="CompleteRevocationRefsType"/>
 *         <xsd:element name="SigAndRefsTimeStamp" type="XAdESTimeStampType"/>
 *         <xsd:element name="RefsOnlyTimeStamp" type="XAdESTimeStampType"/>
 *         <xsd:element name="CertificateValues" type="CertificateValuesType"/>
 *         <xsd:element name="RevocationValues" type="RevocationValuesType"/>
 *         <xsd:element name="AttrAuthoritiesCertValues" type="CertificateValuesType"/>
 *         <xsd:element name="AttributeRevocationValues" type="RevocationValuesType"/>
 *         <xsd:element name="ArchiveTimeStamp" type="XAdESTimeStampType"/>
 *         <xsd:any namespace="##other"/>
 *     </xsd:choice>
 *     <xsd:attribute name="Id" type="xsd:ID" use="optional"/>
 * </xsd:complexType>
 *
 */
let SignatureTimeStamp = class SignatureTimeStamp extends XAdESTimeStamp {
};
SignatureTimeStamp = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.SignatureTimeStamp })
], SignatureTimeStamp);
let SigAndRefsTimeStamp = class SigAndRefsTimeStamp extends XAdESTimeStamp {
};
SigAndRefsTimeStamp = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.SigAndRefsTimeStamp })
], SigAndRefsTimeStamp);
let RefsOnlyTimeStamp = class RefsOnlyTimeStamp extends XAdESTimeStamp {
};
RefsOnlyTimeStamp = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.RefsOnlyTimeStamp })
], RefsOnlyTimeStamp);
let ArchiveTimeStamp = class ArchiveTimeStamp extends XAdESTimeStamp {
};
ArchiveTimeStamp = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.ArchiveTimeStamp })
], ArchiveTimeStamp);
let AttributeCertificateRefs = class AttributeCertificateRefs extends CompleteCertificateRefs {
};
AttributeCertificateRefs = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.AttributeCertificateRefs })
], AttributeCertificateRefs);
let AttributeRevocationRefs = class AttributeRevocationRefs extends CompleteRevocationRefs {
};
AttributeRevocationRefs = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.AttributeRevocationRefs })
], AttributeRevocationRefs);
let AttrAuthoritiesCertValues = class AttrAuthoritiesCertValues extends CertificateValues {
};
AttrAuthoritiesCertValues = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.AttrAuthoritiesCertValues })
], AttrAuthoritiesCertValues);
let AttributeRevocationValues = class AttributeRevocationValues extends RevocationValues {
};
AttributeRevocationValues = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.AttributeRevocationValues })
], AttributeRevocationValues);
/**
 * Abstract class for UnsignedSignatureProperties
 *
 * @export
 * @class UnsignedSignatureProperty
 * @extends {XadesObject}
 */
let UnsignedSignatureProperty = class UnsignedSignatureProperty extends XadesObject {
};
UnsignedSignatureProperty = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: "UnsignedSignatureProperty" })
], UnsignedSignatureProperty);
let UnsignedSignatureProperties = class UnsignedSignatureProperties extends XadesCollection {
    OnLoadXml(element) {
        for (let i = 0; i < element.childNodes.length; i++) {
            const node = element.childNodes.item(i);
            if (node.nodeType !== XmlCore.XmlNodeType.Element) {
                continue;
            }
            let XmlClass;
            switch (node.localName) {
                case XmlXades.ElementNames.CounterSignature:
                    XmlClass = CounterSignature;
                    break;
                case XmlXades.ElementNames.SignatureTimeStamp:
                    XmlClass = SignatureTimeStamp;
                    break;
                case XmlXades.ElementNames.CompleteCertificateRefs:
                    XmlClass = CompleteCertificateRefs;
                    break;
                case XmlXades.ElementNames.CompleteRevocationRefs:
                    XmlClass = CompleteRevocationRefs;
                    break;
                case XmlXades.ElementNames.AttributeCertificateRefs:
                    XmlClass = AttributeCertificateRefs;
                    break;
                case XmlXades.ElementNames.AttributeRevocationRefs:
                    XmlClass = AttributeRevocationRefs;
                    break;
                case XmlXades.ElementNames.SigAndRefsTimeStamp:
                    XmlClass = SigAndRefsTimeStamp;
                    break;
                case XmlXades.ElementNames.RefsOnlyTimeStamp:
                    XmlClass = RefsOnlyTimeStamp;
                    break;
                case XmlXades.ElementNames.CertificateValues:
                    XmlClass = CertificateValues;
                    break;
                case XmlXades.ElementNames.RevocationValues:
                    XmlClass = RevocationValues;
                    break;
                case XmlXades.ElementNames.AttrAuthoritiesCertValues:
                    XmlClass = AttrAuthoritiesCertValues;
                    break;
                case XmlXades.ElementNames.AttributeRevocationValues:
                    XmlClass = AttributeRevocationValues;
                    break;
                case XmlXades.ElementNames.ArchiveTimeStamp:
                    XmlClass = ArchiveTimeStamp;
                    break;
            }
            if (XmlClass) {
                const item = XmlClass.LoadXml(node);
                this.Add(item);
            }
        }
    }
};
tslib_1.__decorate([
    XmlCore.XmlAttribute({ localName: XmlXades.AttributeNames.Id, defaultValue: "" })
], UnsignedSignatureProperties.prototype, "Id", void 0);
UnsignedSignatureProperties = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.UnsignedSignatureProperties, parser: UnsignedSignatureProperty })
], UnsignedSignatureProperties);

/**
 *
 * <xsd:element name="UnsignedProperties" type="UnsignedPropertiesType"/>
 * <xsd:complexType name="UnsignedPropertiesType">
 *     <xsd:sequence>
 *         <xsd:element name="UnsignedSignatureProperties" type="UnsignedSignaturePropertiesType" minOccurs="0"/>
 *         <xsd:element name="UnsignedDataObjectProperties" type="UnsignedDataObjectPropertiesType" minOccurs="0"/>
 *     </xsd:sequence>
 *     <xsd:attribute name="Id" type="xsd:ID" use="optional"/>
 * </xsd:complexType>
 *
 */
let UnsignedProperties = class UnsignedProperties extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlAttribute({ localName: XmlXades.AttributeNames.Id, defaultValue: "" })
], UnsignedProperties.prototype, "Id", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: UnsignedSignatureProperties })
], UnsignedProperties.prototype, "UnsignedSignatureProperties", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: UnsignedDataObjectProperties })
], UnsignedProperties.prototype, "UnsignedDataObjectProperties", void 0);
UnsignedProperties = tslib_1.__decorate([
    XmlCore.XmlElement({
        localName: XmlXades.ElementNames.UnsignedProperties,
    })
], UnsignedProperties);

/**
 *
 * <xsd:element name="QualifyingProperties" type="QualifyingPropertiesType"/>
 * <xsd:complexType name="QualifyingPropertiesType">
 *     <xsd:sequence>
 *         <xsd:element name="SignedProperties" type="SignedPropertiesType" minOccurs="0"/>
 *         <xsd:element name="UnsignedProperties" type="UnsignedPropertiesType" minOccurs="0"/>
 *     </xsd:sequence>
 *     <xsd:attribute name="Target" type="xsd:anyURI" use="required"/>
 *     <xsd:attribute name="Id" type="xsd:ID" use="optional"/>
 * </xsd:complexType>
 *
 */
let QualifyingProperties = class QualifyingProperties extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlAttribute({ localName: XmlXades.AttributeNames.Target, required: true })
], QualifyingProperties.prototype, "Target", void 0);
tslib_1.__decorate([
    XmlCore.XmlAttribute({ localName: XmlXades.AttributeNames.Id, defaultValue: "" })
], QualifyingProperties.prototype, "Id", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: SignedProperties })
], QualifyingProperties.prototype, "SignedProperties", void 0);
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: UnsignedProperties })
], QualifyingProperties.prototype, "UnsignedProperties", void 0);
QualifyingProperties = tslib_1.__decorate([
    XmlCore.XmlElement({
        localName: XmlXades.ElementNames.QualifyingProperties,
    })
], QualifyingProperties);

/**
 *
 * <xsd:element name="QualifyingPropertiesReference" type="QualifyingPropertiesReferenceType"/>
 * <xsd:complexType name="QualifyingPropertiesReferenceType">
 *     <xsd:attribute name="URI" type="xsd:anyURI" use="required"/>
 *     <xsd:attribute name="Id" type="xsd:ID" use="optional"/>
 * </xsd:complexType>
 *
 */
let QualifyingPropertiesReference = class QualifyingPropertiesReference extends XadesObject {
};
tslib_1.__decorate([
    XmlCore.XmlAttribute({ localName: XmlXades.AttributeNames.URI, required: true })
], QualifyingPropertiesReference.prototype, "Uri", void 0);
tslib_1.__decorate([
    XmlCore.XmlAttribute({ localName: XmlXades.AttributeNames.Id, defaultValue: "" })
], QualifyingPropertiesReference.prototype, "Id", void 0);
QualifyingPropertiesReference = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlXades.ElementNames.QualifyingPropertiesReference })
], QualifyingPropertiesReference);

let DataObject = class DataObject extends XmlDSigJs.DataObject {
};
tslib_1.__decorate([
    XmlCore.XmlChildElement({ parser: QualifyingProperties })
], DataObject.prototype, "QualifyingProperties", void 0);
DataObject = tslib_1.__decorate([
    XmlCore.XmlElement({ localName: XmlDSigJs.XmlSignature.ElementNames.Object })
], DataObject);



var xadesXml = /*#__PURE__*/Object.freeze({
    get Any () { return Any; },
    get AnyCollection () { return AnyCollection; },
    get OtherCertificate () { return OtherCertificate; },
    get OtherCertificateCollection () { return OtherCertificateCollection; },
    get EncapsulatedX509Certificate () { return EncapsulatedX509Certificate; },
    get EncapsulatedX509CertificateCollection () { return EncapsulatedX509CertificateCollection; },
    get CertificateValues () { return CertificateValues; },
    get CommitmentTypeQualifier () { return CommitmentTypeQualifier; },
    get CommitmentTypeQualifiers () { return CommitmentTypeQualifiers; },
    get ObjectReference () { return ObjectReference; },
    get ObjectReferenceCollection () { return ObjectReferenceCollection; },
    get CommitmentTypeIndication () { return CommitmentTypeIndication; },
    get CompleteCertificateRefs () { return CompleteCertificateRefs; },
    get OtherRef () { return OtherRef; },
    get OtherRefs () { return OtherRefs; },
    get ResponderID () { return ResponderID; },
    get OCSPIdentifier () { return OCSPIdentifier; },
    get OCSPRef () { return OCSPRef; },
    get OCSPRefs () { return OCSPRefs; },
    get CRLIdentifier () { return CRLIdentifier; },
    get CRLRef () { return CRLRef; },
    get CRLRefs () { return CRLRefs; },
    get CompleteRevocationRefs () { return CompleteRevocationRefs; },
    get CounterSignature () { return CounterSignature; },
    get DataObjectFormat () { return DataObjectFormat; },
    get XadesDateTime () { return XadesDateTime; },
    get EncapsulatedPKIData () { return EncapsulatedPKIData; },
    get Include () { return Include; },
    get ReferenceInfo () { return ReferenceInfo; },
    get ReferenceInfos () { return ReferenceInfos; },
    get EncapsulatedTimeStamp () { return EncapsulatedTimeStamp; },
    get EncapsulatedTimeStampCollection () { return EncapsulatedTimeStampCollection; },
    get XMLTimeStamp () { return XMLTimeStamp; },
    get XMLTimeStampCollection () { return XMLTimeStampCollection; },
    get GenericTimeStamp () { return GenericTimeStamp; },
    get Identifier () { return Identifier; },
    get DocumentationReference () { return DocumentationReference; },
    get DocumentationReferences () { return DocumentationReferences; },
    get ObjectIdentifier () { return ObjectIdentifier; },
    get OtherTimeStamp () { return OtherTimeStamp; },
    get QualifyingProperties () { return QualifyingProperties; },
    get QualifyingPropertiesReference () { return QualifyingPropertiesReference; },
    get OtherValue () { return OtherValue; },
    get OtherValues () { return OtherValues; },
    get EncapsulatedOCSPValue () { return EncapsulatedOCSPValue; },
    get OCSPValues () { return OCSPValues; },
    get EncapsulatedCRLValue () { return EncapsulatedCRLValue; },
    get CRLValues () { return CRLValues; },
    get RevocationValues () { return RevocationValues; },
    get SigPolicyId () { return SigPolicyId; },
    get SigPolicyHash () { return SigPolicyHash; },
    get SigPolicyQualifier () { return SigPolicyQualifier; },
    get Integer () { return Integer; },
    get IntegerList () { return IntegerList; },
    get NoticeReference () { return NoticeReference; },
    get SPUserNotice () { return SPUserNotice; },
    get SPURI () { return SPURI; },
    get SigPolicyQualifiers () { return SigPolicyQualifiers; },
    get SignaturePolicyId () { return SignaturePolicyId; },
    get SignaturePolicyIdentifier () { return SignaturePolicyIdentifier; },
    get SignatureProductionPlace () { return SignatureProductionPlace; },
    get IndividualDataObjectsTimeStamp () { return IndividualDataObjectsTimeStamp; },
    get IndividualDataObjectsTimeStampCollection () { return IndividualDataObjectsTimeStampCollection; },
    get AllDataObjectsTimeStamp () { return AllDataObjectsTimeStamp; },
    get DataObjectFormatCollection () { return DataObjectFormatCollection; },
    get CommitmentTypeIndicationCollection () { return CommitmentTypeIndicationCollection; },
    get AllDataObjectsTimeStampCollection () { return AllDataObjectsTimeStampCollection; },
    get SignedDataObjectProperties () { return SignedDataObjectProperties; },
    get SignedProperties () { return SignedProperties; },
    get SignedSignatureProperties () { return SignedSignatureProperties; },
    get ClaimedRole () { return ClaimedRole; },
    get ClaimedRoles () { return ClaimedRoles; },
    get CertifiedRole () { return CertifiedRole; },
    get CertifiedRoles () { return CertifiedRoles; },
    get SignerRole () { return SignerRole; },
    get DigestAlgAndValueType () { return DigestAlgAndValueType; },
    get IssuerSerial () { return IssuerSerial; },
    get Cert () { return Cert; },
    get CertIDList () { return CertIDList; },
    get SigningCertificate () { return SigningCertificate; },
    get UnsignedDataObjectProperty () { return UnsignedDataObjectProperty; },
    get UnsignedDataObjectProperties () { return UnsignedDataObjectProperties; },
    get UnsignedProperties () { return UnsignedProperties; },
    get SignatureTimeStamp () { return SignatureTimeStamp; },
    get SigAndRefsTimeStamp () { return SigAndRefsTimeStamp; },
    get RefsOnlyTimeStamp () { return RefsOnlyTimeStamp; },
    get ArchiveTimeStamp () { return ArchiveTimeStamp; },
    get AttributeCertificateRefs () { return AttributeCertificateRefs; },
    get AttributeRevocationRefs () { return AttributeRevocationRefs; },
    get AttrAuthoritiesCertValues () { return AttrAuthoritiesCertValues; },
    get AttributeRevocationValues () { return AttributeRevocationValues; },
    get UnsignedSignatureProperty () { return UnsignedSignatureProperty; },
    get UnsignedSignatureProperties () { return UnsignedSignatureProperties; },
    get XAdESTimeStamp () { return XAdESTimeStamp; },
    get DataObject () { return DataObject; },
    XmlXades: XmlXades
});

const XADES_REFERENCE_TYPE = "http://uri.etsi.org/01903#SignedProperties";
class SignedXml extends XmlDSigJs.SignedXml {
    constructor(node) {
        super(node);
        this.properties = null;
        this.CreateQualifyingProperties();
    }
    get Properties() {
        return this.properties;
    }
    get SignedProperties() {
        if (!this.Properties) {
            throw new XmlCore.XmlError(XmlCore.XE.XML_EXCEPTION, "Properties is empty");
        }
        return this.Properties.SignedProperties;
    }
    get UnsignedProperties() {
        if (!this.Properties) {
            throw new XmlCore.XmlError(XmlCore.XE.XML_EXCEPTION, "Properties is empty");
        }
        return this.Properties.UnsignedProperties;
    }
    //#region Public methods
    LoadXml(value, useContainer) {
        super.LoadXml(value);
        let properties = null;
        this.XmlSignature.ObjectList.Some((item) => {
            if (item.Element) {
                // Looking for <QualifyingProperties>
                for (let i = 0; i < item.Element.childNodes.length; i++) {
                    const node = item.Element.childNodes.item(i);
                    if (node.nodeType === XmlCore.XmlNodeType.Element && node.localName === XmlXades.ElementNames.QualifyingProperties) {
                        properties = QualifyingProperties.LoadXml(node);
                        return true;
                    }
                }
            }
            return false;
        });
        this.properties = properties;
    }
    Sign(algorithm, key, data, options) {
        return super.Sign.apply(this, arguments);
    }
    //#endregion
    //#region Protected methods
    CreateQualifyingProperties() {
        if (this.Properties) {
            throw new XmlCore.XmlError(XmlCore.XE.XML_EXCEPTION, "Cannot create QualifyingProperties cause current signature has got one. You must create CounterSignature");
        }
        const rnd = XmlDSigJs.Application.crypto.getRandomValues(new Uint8Array(6));
        this.XmlSignature.Id = `xmldsig-${xmlId}`;
        const dataObject = new DataObject();
        dataObject.QualifyingProperties.Target = `#${this.XmlSignature.Id}`;
        dataObject.QualifyingProperties.SignedProperties.Id = `SignedPropertiesId`;
        this.properties = dataObject.QualifyingProperties;
        this.XmlSignature.ObjectList.Add(dataObject);
    }
    async ApplySignOptions(signature, algorithm, key, options) {
        await super.ApplySignOptions(signature, algorithm, key, options);
        if (this.Properties) {
            // Add SigningTime
            const sigProps = this.Properties.SignedProperties.SignedSignatureProperties;
            sigProps.SigningTime.Value = new Date();
            // Add reference for SignedProperties
            const signingAlg = XmlCore.assign({}, algorithm, key.algorithm);
            const xadesRefHash = signingAlg.hash;
            const xadesRef = new XmlDSigJs.Reference();
            xadesRef.Id = `xmldsig-${xmlId}-ref2`;
            xadesRef.Type = XADES_REFERENCE_TYPE;
            xadesRef.Uri = `#${this.Properties.SignedProperties.Id}`;
            xadesRef.DigestMethod.Algorithm = XmlDSigJs.CryptoConfig.GetHashAlgorithm(xadesRefHash).namespaceURI;
            signature.SignedInfo.References.Add(xadesRef);
            await this.ApplySigningCertificate(options.signingCertificate);
            await this.ApplySignaturePolicyIdentifier(options.policy);
            this.ApplySignatureProductionPlace(options.productionPlace);
            this.ApplySignerRoles(options.signerRole);
        }
    }
    async ApplySigningCertificate(base64string) {
        if (this.Properties && base64string) {
            const raw = XmlCore.Convert.FromBase64(base64string);
            const cert = new XmlDSigJs.X509Certificate(raw);
            const ssp = this.Properties.SignedProperties.SignedSignatureProperties;
            if (ssp.SigningCertificate.Count) {
                throw new XmlCore.XmlError(XmlCore.XE.XML_EXCEPTION, "Signature can contain only one SigningCertificate");
            }
            const signingCertificate = new Cert();
            signingCertificate.IssuerSerial.X509IssuerName = cert.Issuer;
            signingCertificate.IssuerSerial.X509SerialNumber = cert.SerialNumber; // TODO: Must be Big number here
            const alg = XmlDSigJs.CryptoConfig.GetHashAlgorithm("SHA-256");
            signingCertificate.CertDigest.DigestMethod.Algorithm = alg.namespaceURI;
            signingCertificate.CertDigest.DigestValue = new Uint8Array(await cert.Thumbprint(alg.algorithm.name));
            this.Properties.SignedProperties.SignedSignatureProperties.SigningCertificate.Add(signingCertificate);
        }
    }
    async ApplySignaturePolicyIdentifier(options) {
        if (this.Properties) {
            const ssp = this.Properties.SignedProperties.SignedSignatureProperties;
            if (options && typeof options === "object") {
                const policyId = new SignaturePolicyId();
                policyId.SigPolicyId = new SigPolicyId();
                policyId.SigPolicyId.Identifier = new Identifier();
                policyId.SigPolicyId.Identifier.Qualifier = options.identifier.qualifier;
                policyId.SigPolicyId.Identifier.Value = options.identifier.value;
                if (options.identifier.description) {
                    policyId.SigPolicyId.Description = options.identifier.description;
                }
                if (options.identifier.references) {
                    policyId.SigPolicyId.DocumentationReferences = new DocumentationReferences();
                    options.identifier.references.forEach((referenceValue) => {
                        const reference = new DocumentationReference();
                        reference.Uri = referenceValue;
                        policyId.SigPolicyId.DocumentationReferences.Add(reference);
                    });
                }
                if (options.transforms && options.transforms.length) {
                    policyId.Transforms = new XmlDSigJs.Transforms();
                    options.transforms.forEach((transform) => {
                        policyId.Transforms.Add(this.ResolveTransform(transform));
                    });
                }
                policyId.SigPolicyHash = new SigPolicyHash();
                policyId.SigPolicyHash.DigestMethod = new XmlDSigJs.DigestMethod();
                const digestAlgorithm = XmlDSigJs.CryptoConfig.GetHashAlgorithm(options.hash);
                policyId.SigPolicyHash.DigestMethod.Algorithm = digestAlgorithm.namespaceURI;
                const identifierDoc = policyId.SigPolicyId.Identifier.GetXml().cloneNode(true);
                this.CopyNamespaces(identifierDoc, identifierDoc, true);
                this.InjectNamespaces(this.GetSignatureNamespaces(), identifierDoc, true);
                let identifierContent = null;
                if (policyId.Transforms && policyId.Transforms.Count) {
                    identifierContent = this.ApplyTransforms(policyId.Transforms, identifierDoc);
                }
                else {
                    const c14n = new XmlDSigJs.XmlDsigC14NTransform();
                    c14n.LoadInnerXml(identifierDoc);
                    identifierContent = c14n.GetOutput();
                }
                policyId.SigPolicyHash.DigestValue = await digestAlgorithm.Digest(identifierContent);
                if (options.qualifiers) {
                    policyId.SigPolicyQualifiers = new SigPolicyQualifiers();
                    options.qualifiers.forEach((qualifierValue) => {
                        const container = new SigPolicyQualifier();
                        if (typeof qualifierValue === "string") {
                            const qualifier = new SPURI();
                            qualifier.Value = qualifierValue;
                            container.Add(qualifier);
                        }
                        else {
                            const qualifier = new SPUserNotice();
                            if (qualifierValue.explicitText) {
                                qualifier.ExplicitText = qualifierValue.explicitText;
                            }
                            if (qualifierValue.noticeRef) {
                                qualifier.NoticeRef = new NoticeReference();
                                qualifier.NoticeRef.Organization = qualifierValue.noticeRef.organization;
                                qualifier.NoticeRef.NoticeNumbers = new IntegerList();
                                if (qualifierValue.noticeRef.noticeNumbers) {
                                    qualifierValue.noticeRef.noticeNumbers.forEach((numberValue) => {
                                        const noticeNumber = new Integer();
                                        noticeNumber.Value = numberValue;
                                        qualifier.NoticeRef.NoticeNumbers.Add(noticeNumber);
                                    });
                                }
                            }
                            container.Add(qualifier);
                        }
                        policyId.SigPolicyQualifiers.Add(container);
                    });
                }
                ssp.SignaturePolicyIdentifier.SignaturePolicyId = policyId;
                ssp.SignaturePolicyIdentifier.SignaturePolicyImplied = false;
            }
            else {
                ssp.SignaturePolicyIdentifier.SignaturePolicyImplied = true;
            }
        }
    }
    ApplySignatureProductionPlace(options) {
        if (this.Properties && options) {
            const ssp = this.Properties.SignedProperties.SignedSignatureProperties;
            if (options.city) {
                ssp.SignatureProductionPlace.City = options.city;
            }
            if (options.code) {
                ssp.SignatureProductionPlace.PostalCode = options.code;
            }
            if (options.country) {
                ssp.SignatureProductionPlace.CountryName = options.country;
            }
            if (options.state) {
                ssp.SignatureProductionPlace.StateOrProvince = options.state;
            }
        }
    }
    ApplySignerRoles(options) {
        if (this.Properties && options) {
            const ssp = this.Properties.SignedProperties.SignedSignatureProperties;
            if (options.claimed) {
                options.claimed.forEach((role) => {
                    const claimedRole = new ClaimedRole();
                    claimedRole.Value = role;
                    ssp.SignerRole.ClaimedRoles.Add(claimedRole);
                });
            }
            if (options.certified) {
                options.certified.forEach((role) => {
                    const certifiedRole = new CertifiedRole();
                    certifiedRole.Encoding = "der";
                    certifiedRole.Value = XmlCore.Convert.FromBase64(role);
                    ssp.SignerRole.CertifiedRoles.Add(certifiedRole);
                });
            }
        }
    }
    async VerifySigningCertificate() {
        let x509 = null;
        if (this.XmlSignature && this.Properties) {
            const ssp = this.Properties.SignedProperties.SignedSignatureProperties;
            if (ssp.SigningCertificate.Count !== 1) {
                throw new XmlCore.XmlError(XmlCore.XE.XML_EXCEPTION, "Signature has got wrong amount of SigningCertificate, MUST be one");
            }
            // find certificate by Thumbprint
            const alg = XmlDSigJs.CryptoConfig.GetHashAlgorithm("SHA-256");
            const signingCertificate = ssp.SigningCertificate.Item(0);
            const b64CertDigest = XmlCore.Convert.ToBase64(signingCertificate.CertDigest.DigestValue);
            const keyInfos = this.XmlSignature.KeyInfo;
            // tslint:disable-next-line:no-unused-expression
            for (let i = 0; i < keyInfos.Count, !x509; i++) {
                const item = keyInfos.Item(i);
                if (item instanceof XmlDSigJs.KeyInfoX509Data) {
                    const certs = item.Certificates;
                    // tslint:disable-next-line:no-unused-expression
                    for (let j = 0; j < certs.length, !x509; j++) {
                        const cert = certs[j];
                        if (!cert) {
                            continue;
                        }
                        const hash = new Uint8Array(await cert.Thumbprint(alg.algorithm));
                        const b64Hash = XmlCore.Convert.ToBase64(hash);
                        if (b64Hash === b64CertDigest) {
                            x509 = cert;
                        }
                    }
                }
            }
            if (!(x509 &&
                x509.Issuer === signingCertificate.IssuerSerial.X509IssuerName &&
                x509.SerialNumber === signingCertificate.IssuerSerial.X509SerialNumber)) {
                throw new XmlCore.XmlError(XmlCore.XE.XML_EXCEPTION, "SigningCertificate not found");
            }
        }
        return x509;
    }
}

let xml = xadesXml;

exports.Select = XmlCore.Select;
exports.Parse = XmlCore.Parse;
exports.Convert = XmlCore.Convert;
exports.Application = XmlDSigJs.Application;
exports.xml = xml;
exports.SignedXml = SignedXml;
exports.xmlId = `xmldsig-${xmlId}`;
