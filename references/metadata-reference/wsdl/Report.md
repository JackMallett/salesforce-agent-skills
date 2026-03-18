# Report — WSDL

## WSDL Segment

The following WSDL Segment shows the complete structure of this metadata type:

```xml
<xsd:simpleType name="ChartAxis">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="x"/>
    <xsd:enumeration value="y"/>
    <xsd:enumeration value="y2"/>
    <xsd:enumeration value="r"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="ChartBackgroundDirection">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="TopToBottom"/>
    <xsd:enumeration value="LeftToRight"/>
    <xsd:enumeration value="Diagonal"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="ChartLegendPosition">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="Right"/>
    <xsd:enumeration value="Bottom"/>
    <xsd:enumeration value="OnChart"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="ChartPosition">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="CHART_TOP"/>
    <xsd:enumeration value="CHART_BOTTOM"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="ChartRangeType">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="Auto"/>
    <xsd:enumeration value="Manual"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="ChartSummary">
  <xsd:sequence>
    <xsd:element name="aggregate" minOccurs="0" type="tns:ReportSummaryType"/>
    <xsd:element name="axisBinding" minOccurs="0" type="tns:ChartAxis"/>
    <xsd:element name="column" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="ChartType">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="None"/>
    <xsd:enumeration value="Scatter"/>
    <xsd:enumeration value="ScatterGrouped"/>
    <xsd:enumeration value="Bubble"/>
    <xsd:enumeration value="BubbleGrouped"/>
    <xsd:enumeration value="HorizontalBar"/>
    <xsd:enumeration value="HorizontalBarGrouped"/>
    <xsd:enumeration value="HorizontalBarStacked"/>
    <xsd:enumeration value="HorizontalBarStackedTo100"/>
    <xsd:enumeration value="VerticalColumn"/>
    <xsd:enumeration value="VerticalColumnGrouped"/>
    <xsd:enumeration value="VerticalColumnStacked"/>
    <xsd:enumeration value="VerticalColumnStackedTo100"/>
    <xsd:enumeration value="Line"/>
    <xsd:enumeration value="LineGrouped"/>
    <xsd:enumeration value="LineCumulative"/>
    <xsd:enumeration value="LineCumulativeGrouped"/>
    <xsd:enumeration value="Pie"/>
    <xsd:enumeration value="Donut"/>
    <xsd:enumeration value="Funnel"/>
    <xsd:enumeration value="VerticalColumnLine"/>
    <xsd:enumeration value="VerticalColumnGroupedLine"/>
    <xsd:enumeration value="VerticalColumnStackedLine"/>
    <xsd:enumeration value="Plugin"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="CurrencyIsoCode">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="ADP"/>
    <xsd:enumeration value="AED"/>
    <xsd:enumeration value="AFA"/>
    <xsd:enumeration value="AFN"/>
    <xsd:enumeration value="ALL"/>
    <xsd:enumeration value="AMD"/>
    <xsd:enumeration value="ANG"/>
    <xsd:enumeration value="AOA"/>
    <xsd:enumeration value="ARS"/>
    <xsd:enumeration value="ATS"/>
    <xsd:enumeration value="AUD"/>
    <xsd:enumeration value="XAV"/>
    <xsd:enumeration value="AWG"/>
    <xsd:enumeration value="AZM"/>
    <xsd:enumeration value="AZN"/>
    <xsd:enumeration value="BAM"/>
    <xsd:enumeration value="BBD"/>
    <xsd:enumeration value="BDT"/>
    <xsd:enumeration value="BEF"/>
    <xsd:enumeration value="BGL"/>
    <xsd:enumeration value="BGN"/>
    <xsd:enumeration value="BHD"/>
    <xsd:enumeration value="BIF"/>
    <xsd:enumeration value="BMD"/>
    <xsd:enumeration value="BND"/>
    <xsd:enumeration value="BOB"/>
    <xsd:enumeration value="BOV"/>
    <xsd:enumeration value="BRB"/>
    <xsd:enumeration value="BRL"/>
    <xsd:enumeration value="BSD"/>
    <xsd:enumeration value="BTN"/>
    <xsd:enumeration value="BWP"/>
    <xsd:enumeration value="BYB"/>
    <xsd:enumeration value="BYN"/>
    <xsd:enumeration value="BYR"/>
    <xsd:enumeration value="BZD"/>
    <xsd:enumeration value="CAD"/>
    <xsd:enumeration value="CDF"/>
    <xsd:enumeration value="CHF"/>
    <xsd:enumeration value="CLF"/>
    <xsd:enumeration value="CLP"/>
    <xsd:enumeration value="CNH"/>
    <xsd:enumeration value="CNY"/>
    <xsd:enumeration value="COP"/>
    <xsd:enumeration value="CRC"/>
    <xsd:enumeration value="CSD"/>
    <xsd:enumeration value="CUC"/>
    <xsd:enumeration value="CUP"/>
    <xsd:enumeration value="CVE"/>
    <xsd:enumeration value="CYP"/>
    <xsd:enumeration value="CZK"/>
    <xsd:enumeration value="DEM"/>
    <xsd:enumeration value="DJF"/>
    <xsd:enumeration value="DKK"/>
    <xsd:enumeration value="DOP"/>
    <xsd:enumeration value="DZD"/>
    <xsd:enumeration value="ECS"/>
    <xsd:enumeration value="EEK"/>
    <xsd:enumeration value="EGP"/>
    <xsd:enumeration value="ERN"/>
    <xsd:enumeration value="ESP"/>
    <xsd:enumeration value="ETB"/>
    <xsd:enumeration value="EUR"/>
    <xsd:enumeration value="FIM"/>
    <xsd:enumeration value="FJD"/>
    <xsd:enumeration value="FKP"/>
    <xsd:enumeration value="XFL"/>
    <xsd:enumeration value="FRF"/>
    <xsd:enumeration value="GBP"/>
    <xsd:enumeration value="GBT"/>
    <xsd:enumeration value="GEL"/>
    <xsd:enumeration value="GHC"/>
    <xsd:enumeration value="GHS"/>
    <xsd:enumeration value="GIP"/>
    <xsd:enumeration value="GMD"/>
    <xsd:enumeration value="GNF"/>
    <xsd:enumeration value="GRD"/>
    <xsd:enumeration value="GTQ"/>
    <xsd:enumeration value="GWP"/>
    <xsd:enumeration value="GYD"/>
    <xsd:enumeration value="HKD"/>
    <xsd:enumeration value="HNL"/>
    <xsd:enumeration value="HRD"/>
    <xsd:enumeration value="HRK"/>
    <xsd:enumeration value="HTG"/>
    <xsd:enumeration value="HUF"/>
    <xsd:enumeration value="IDR"/>
    <xsd:enumeration value="IEP"/>
    <xsd:enumeration value="ILS"/>
    <xsd:enumeration value="INR"/>
    <xsd:enumeration value="IQD"/>
    <xsd:enumeration value="IRR"/>
    <xsd:enumeration value="ISK"/>
    <xsd:enumeration value="ITL"/>
    <xsd:enumeration value="JMD"/>
    <xsd:enumeration value="JOD"/>
    <xsd:enumeration value="JPY"/>
    <xsd:enumeration value="KES"/>
    <xsd:enumeration value="KGS"/>
    <xsd:enumeration value="KHR"/>
    <xsd:enumeration value="KMF"/>
    <xsd:enumeration value="KPW"/>
    <xsd:enumeration value="KRW"/>
    <xsd:enumeration value="KWD"/>
    <xsd:enumeration value="KYD"/>
    <xsd:enumeration value="KZT"/>
    <xsd:enumeration value="LAK"/>
    <xsd:enumeration value="LBP"/>
    <xsd:enumeration value="LKR"/>
    <xsd:enumeration value="LRD"/>
    <xsd:enumeration value="LSL"/>
    <xsd:enumeration value="LTL"/>
    <xsd:enumeration value="LUF"/>
    <xsd:enumeration value="LVL"/>
    <xsd:enumeration value="LYD"/>
    <xsd:enumeration value="MAD"/>
    <xsd:enumeration value="XMA"/>
    <xsd:enumeration value="MDL"/>
    <xsd:enumeration value="MGA"/>
    <xsd:enumeration value="MGF"/>
    <xsd:enumeration value="MKD"/>
    <xsd:enumeration value="MMK"/>
    <xsd:enumeration value="MNT"/>
    <xsd:enumeration value="MOP"/>
    <xsd:enumeration value="MRO"/>
    <xsd:enumeration value="MRU"/>
    <xsd:enumeration value="MTL"/>
    <xsd:enumeration value="MUR"/>
    <xsd:enumeration value="MVR"/>
    <xsd:enumeration value="MWK"/>
    <xsd:enumeration value="MXN"/>
    <xsd:enumeration value="MXV"/>
    <xsd:enumeration value="MYR"/>
    <xsd:enumeration value="MZM"/>
    <xsd:enumeration value="MZN"/>
    <xsd:enumeration value="NAD"/>
    <xsd:enumeration value="NGN"/>
    <xsd:enumeration value="NIO"/>
    <xsd:enumeration value="NLG"/>
    <xsd:enumeration value="NOK"/>
    <xsd:enumeration value="NPR"/>
    <xsd:enumeration value="NZD"/>
    <xsd:enumeration value="OMR"/>
    <xsd:enumeration value="PAB"/>
    <xsd:enumeration value="XPA"/>
    <xsd:enumeration value="PEN"/>
    <xsd:enumeration value="PGK"/>
    <xsd:enumeration value="PHP"/>
    <xsd:enumeration value="PKR"/>
    <xsd:enumeration value="PLN"/>
    <xsd:enumeration value="PTE"/>
    <xsd:enumeration value="PYG"/>
    <xsd:enumeration value="QAR"/>
    <xsd:enumeration value="RMB"/>
    <xsd:enumeration value="ROL"/>
    <xsd:enumeration value="RON"/>
    <xsd:enumeration value="RSD"/>
    <xsd:enumeration value="RUB"/>
    <xsd:enumeration value="RUR"/>
    <xsd:enumeration value="RWF"/>
    <xsd:enumeration value="SAR"/>
    <xsd:enumeration value="SBD"/>
    <xsd:enumeration value="SCR"/>
    <xsd:enumeration value="SDD"/>
    <xsd:enumeration value="SDG"/>
    <xsd:enumeration value="SEK"/>
    <xsd:enumeration value="SGD"/>
    <xsd:enumeration value="SHP"/>
    <xsd:enumeration value="SIT"/>
    <xsd:enumeration value="SKK"/>
    <xsd:enumeration value="SLE"/>
    <xsd:enumeration value="SLL"/>
    <xsd:enumeration value="XSO"/>
    <xsd:enumeration value="SOS"/>
    <xsd:enumeration value="SRD"/>
    <xsd:enumeration value="SRG"/>
    <xsd:enumeration value="SSP"/>
    <xsd:enumeration value="STD"/>
    <xsd:enumeration value="STN"/>
    <xsd:enumeration value="SUR"/>
    <xsd:enumeration value="SVC"/>
    <xsd:enumeration value="SYP"/>
    <xsd:enumeration value="SZL"/>
    <xsd:enumeration value="THB"/>
    <xsd:enumeration value="TJR"/>
    <xsd:enumeration value="TJS"/>
    <xsd:enumeration value="TMM"/>
    <xsd:enumeration value="TMT"/>
    <xsd:enumeration value="TND"/>
    <xsd:enumeration value="TOP"/>
    <xsd:enumeration value="TPE"/>
    <xsd:enumeration value="TRL"/>
    <xsd:enumeration value="TRY"/>
    <xsd:enumeration value="TTD"/>
    <xsd:enumeration value="TWD"/>
    <xsd:enumeration value="TZS"/>
    <xsd:enumeration value="UAH"/>
    <xsd:enumeration value="UGX"/>
    <xsd:enumeration value="USD"/>
    <xsd:enumeration value="UYU"/>
    <xsd:enumeration value="UZS"/>
    <xsd:enumeration value="VEB"/>
    <xsd:enumeration value="VEF"/>
    <xsd:enumeration value="VES"/>
    <xsd:enumeration value="VND"/>
    <xsd:enumeration value="VUV"/>
    <xsd:enumeration value="WST"/>
    <xsd:enumeration value="XAF"/>
    <xsd:enumeration value="XCD"/>
    <xsd:enumeration value="XCG"/>
    <xsd:enumeration value="XOF"/>
    <xsd:enumeration value="XPF"/>
    <xsd:enumeration value="YER"/>
    <xsd:enumeration value="YUM"/>
    <xsd:enumeration value="ZAR"/>
    <xsd:enumeration value="ZMK"/>
    <xsd:enumeration value="ZMW"/>
    <xsd:enumeration value="ZWD"/>
    <xsd:enumeration value="ZWG"/>
    <xsd:enumeration value="ZWL"/>
    <xsd:enumeration value="ZIG"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="DataCategoryFilterOperation">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="above"/>
    <xsd:enumeration value="below"/>
    <xsd:enumeration value="at"/>
    <xsd:enumeration value="aboveOrBelow"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="FilterOperation">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="equals"/>
    <xsd:enumeration value="notEqual"/>
    <xsd:enumeration value="lessThan"/>
    <xsd:enumeration value="greaterThan"/>
    <xsd:enumeration value="lessOrEqual"/>
    <xsd:enumeration value="greaterOrEqual"/>
    <xsd:enumeration value="contains"/>
    <xsd:enumeration value="notContain"/>
    <xsd:enumeration value="startsWith"/>
    <xsd:enumeration value="includes"/>
    <xsd:enumeration value="excludes"/>
    <xsd:enumeration value="within"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="Language">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="en_US"/>
    <xsd:enumeration value="de"/>
    <xsd:enumeration value="es"/>
    <xsd:enumeration value="fr"/>
    <xsd:enumeration value="it"/>
    <xsd:enumeration value="ja"/>
    <xsd:enumeration value="sv"/>
    <xsd:enumeration value="ko"/>
    <xsd:enumeration value="zh_TW"/>
    <xsd:enumeration value="zh_CN"/>
    <xsd:enumeration value="pt_BR"/>
    <xsd:enumeration value="nl_NL"/>
    <xsd:enumeration value="da"/>
    <xsd:enumeration value="th"/>
    <xsd:enumeration value="fi"/>
    <xsd:enumeration value="ru"/>
    <xsd:enumeration value="es_MX"/>
    <xsd:enumeration value="no"/>
    <xsd:enumeration value="hu"/>
    <xsd:enumeration value="pl"/>
    <xsd:enumeration value="cs"/>
    <xsd:enumeration value="tr"/>
    <xsd:enumeration value="in"/>
    <xsd:enumeration value="ro"/>
    <xsd:enumeration value="vi"/>
    <xsd:enumeration value="uk"/>
    <xsd:enumeration value="iw"/>
    <xsd:enumeration value="el"/>
    <xsd:enumeration value="bg"/>
    <xsd:enumeration value="en_GB"/>
    <xsd:enumeration value="ar"/>
    <xsd:enumeration value="sk"/>
    <xsd:enumeration value="pt_PT"/>
    <xsd:enumeration value="hr"/>
    <xsd:enumeration value="sl"/>
    <xsd:enumeration value="fr_CA"/>
    <xsd:enumeration value="ka"/>
    <xsd:enumeration value="sr"/>
    <xsd:enumeration value="sh"/>
    <xsd:enumeration value="en_AU"/>
    <xsd:enumeration value="en_MY"/>
    <xsd:enumeration value="en_IN"/>
    <xsd:enumeration value="en_PH"/>
    <xsd:enumeration value="en_CA"/>
    <xsd:enumeration value="ro_MD"/>
    <xsd:enumeration value="bs"/>
    <xsd:enumeration value="mk"/>
    <xsd:enumeration value="lv"/>
    <xsd:enumeration value="lt"/>
    <xsd:enumeration value="et"/>
    <xsd:enumeration value="sq"/>
    <xsd:enumeration value="sh_ME"/>
    <xsd:enumeration value="mt"/>
    <xsd:enumeration value="ga"/>
    <xsd:enumeration value="eu"/>
    <xsd:enumeration value="cy"/>
    <xsd:enumeration value="is"/>
    <xsd:enumeration value="cac"/>
    <xsd:enumeration value="quc"/>
    <xsd:enumeration value="cak"/>
    <xsd:enumeration value="ms"/>
    <xsd:enumeration value="tl"/>
    <xsd:enumeration value="lb"/>
    <xsd:enumeration value="rm"/>
    <xsd:enumeration value="hy"/>
    <xsd:enumeration value="hi"/>
    <xsd:enumeration value="ur"/>
    <xsd:enumeration value="bn"/>
    <xsd:enumeration value="de_AT"/>
    <xsd:enumeration value="de_CH"/>
    <xsd:enumeration value="ta"/>
    <xsd:enumeration value="ar_DZ"/>
    <xsd:enumeration value="ar_BH"/>
    <xsd:enumeration value="ar_EG"/>
    <xsd:enumeration value="ar_IQ"/>
    <xsd:enumeration value="ar_JO"/>
    <xsd:enumeration value="ar_KW"/>
    <xsd:enumeration value="ar_LB"/>
    <xsd:enumeration value="ar_LY"/>
    <xsd:enumeration value="ar_MA"/>
    <xsd:enumeration value="ar_OM"/>
    <xsd:enumeration value="ar_QA"/>
    <xsd:enumeration value="ar_SA"/>
    <xsd:enumeration value="ar_SD"/>
    <xsd:enumeration value="ar_SY"/>
    <xsd:enumeration value="ar_TN"/>
    <xsd:enumeration value="ar_AE"/>
    <xsd:enumeration value="ar_YE"/>
    <xsd:enumeration value="zh_SG"/>
    <xsd:enumeration value="zh_HK"/>
    <xsd:enumeration value="en_HK"/>
    <xsd:enumeration value="en_IE"/>
    <xsd:enumeration value="en_SG"/>
    <xsd:enumeration value="en_ZA"/>
    <xsd:enumeration value="fr_BE"/>
    <xsd:enumeration value="fr_LU"/>
    <xsd:enumeration value="fr_CH"/>
    <xsd:enumeration value="de_BE"/>
    <xsd:enumeration value="de_LU"/>
    <xsd:enumeration value="it_CH"/>
    <xsd:enumeration value="nl_BE"/>
    <xsd:enumeration value="es_AR"/>
    <xsd:enumeration value="es_BO"/>
    <xsd:enumeration value="es_CL"/>
    <xsd:enumeration value="es_CO"/>
    <xsd:enumeration value="es_CR"/>
    <xsd:enumeration value="es_DO"/>
    <xsd:enumeration value="es_EC"/>
    <xsd:enumeration value="es_SV"/>
    <xsd:enumeration value="es_GT"/>
    <xsd:enumeration value="es_HN"/>
    <xsd:enumeration value="es_NI"/>
    <xsd:enumeration value="es_PA"/>
    <xsd:enumeration value="es_PY"/>
    <xsd:enumeration value="es_PE"/>
    <xsd:enumeration value="es_PR"/>
    <xsd:enumeration value="es_US"/>
    <xsd:enumeration value="es_UY"/>
    <xsd:enumeration value="es_VE"/>
    <xsd:enumeration value="ca"/>
    <xsd:enumeration value="af"/>
    <xsd:enumeration value="sw"/>
    <xsd:enumeration value="zu"/>
    <xsd:enumeration value="xh"/>
    <xsd:enumeration value="te"/>
    <xsd:enumeration value="ml"/>
    <xsd:enumeration value="kn"/>
    <xsd:enumeration value="mr"/>
    <xsd:enumeration value="gu"/>
    <xsd:enumeration value="pa"/>
    <xsd:enumeration value="en_NZ"/>
    <xsd:enumeration value="mi"/>
    <xsd:enumeration value="my"/>
    <xsd:enumeration value="fa"/>
    <xsd:enumeration value="km"/>
    <xsd:enumeration value="am"/>
    <xsd:enumeration value="kk"/>
    <xsd:enumeration value="ht"/>
    <xsd:enumeration value="sm"/>
    <xsd:enumeration value="haw"/>
    <xsd:enumeration value="zh_MY"/>
    <xsd:enumeration value="ru_LT"/>
    <xsd:enumeration value="ru_PL"/>
    <xsd:enumeration value="ru_AM"/>
    <xsd:enumeration value="ru_KZ"/>
    <xsd:enumeration value="ru_KG"/>
    <xsd:enumeration value="ru_BY"/>
    <xsd:enumeration value="ru_MD"/>
    <xsd:enumeration value="ru_UA"/>
    <xsd:enumeration value="en_AE"/>
    <xsd:enumeration value="en_BE"/>
    <xsd:enumeration value="en_CY"/>
    <xsd:enumeration value="en_DE"/>
    <xsd:enumeration value="en_IL"/>
    <xsd:enumeration value="en_IT"/>
    <xsd:enumeration value="en_NL"/>
    <xsd:enumeration value="en_MT"/>
    <xsd:enumeration value="en_ES"/>
    <xsd:enumeration value="en_PL"/>
    <xsd:enumeration value="en_DK"/>
    <xsd:enumeration value="en_SE"/>
    <xsd:enumeration value="en_NO"/>
    <xsd:enumeration value="en_FR"/>
    <xsd:enumeration value="en_HU"/>
    <xsd:enumeration value="en_CZ"/>
    <xsd:enumeration value="en_SK"/>
    <xsd:enumeration value="en_RO"/>
    <xsd:enumeration value="en_CH"/>
    <xsd:enumeration value="en_AL"/>
    <xsd:enumeration value="en_AD"/>
    <xsd:enumeration value="en_AG"/>
    <xsd:enumeration value="en_AT"/>
    <xsd:enumeration value="en_BS"/>
    <xsd:enumeration value="en_BB"/>
    <xsd:enumeration value="en_BZ"/>
    <xsd:enumeration value="en_BA"/>
    <xsd:enumeration value="en_BG"/>
    <xsd:enumeration value="en_HR"/>
    <xsd:enumeration value="en_DM"/>
    <xsd:enumeration value="en_EE"/>
    <xsd:enumeration value="en_FI"/>
    <xsd:enumeration value="en_GI"/>
    <xsd:enumeration value="en_GR"/>
    <xsd:enumeration value="en_GD"/>
    <xsd:enumeration value="en_GY"/>
    <xsd:enumeration value="en_IS"/>
    <xsd:enumeration value="en_JM"/>
    <xsd:enumeration value="en_JP"/>
    <xsd:enumeration value="en_LV"/>
    <xsd:enumeration value="en_LI"/>
    <xsd:enumeration value="en_LT"/>
    <xsd:enumeration value="en_LU"/>
    <xsd:enumeration value="en_MC"/>
    <xsd:enumeration value="en_ME"/>
    <xsd:enumeration value="en_MK"/>
    <xsd:enumeration value="en_PT"/>
    <xsd:enumeration value="en_RS"/>
    <xsd:enumeration value="en_SI"/>
    <xsd:enumeration value="en_KR"/>
    <xsd:enumeration value="en_KN"/>
    <xsd:enumeration value="en_LC"/>
    <xsd:enumeration value="en_VC"/>
    <xsd:enumeration value="en_TW"/>
    <xsd:enumeration value="en_TH"/>
    <xsd:enumeration value="en_TT"/>
    <xsd:enumeration value="en_TR"/>
    <xsd:enumeration value="nl_SR"/>
    <xsd:enumeration value="fr_HT"/>
    <xsd:enumeration value="de_LI"/>
    <xsd:enumeration value="es_AD"/>
    <xsd:enumeration value="sv_FI"/>
    <xsd:enumeration value="el_CY"/>
    <xsd:enumeration value="fr_MA"/>
    <xsd:enumeration value="kl"/>
    <xsd:enumeration value="ji"/>
    <xsd:enumeration value="hmn"/>
    <xsd:enumeration value="eo"/>
    <xsd:enumeration value="iw_EO"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="Metadata">
  <xsd:sequence>
    <xsd:element name="fullName" minOccurs="0" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="ObjectFilterOperator">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="with"/>
    <xsd:enumeration value="without"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="Report">
  <xsd:complexContent>
    <xsd:extension base="tns:Metadata">
      <xsd:sequence>
        <xsd:element name="aggregateFilters" minOccurs="0" maxOccurs="unbounded" type="tns:ReportAggregateFilter"/>
        <xsd:element name="aggregates" minOccurs="0" maxOccurs="unbounded" type="tns:ReportAggregate"/>
        <xsd:element name="block" minOccurs="0" maxOccurs="unbounded" type="tns:Report"/>
        <xsd:element name="blockInfo" minOccurs="0" type="tns:ReportBlockInfo"/>
        <xsd:element name="buckets" minOccurs="0" maxOccurs="unbounded" type="tns:ReportBucketField"/>
        <xsd:element name="chart" minOccurs="0" type="tns:ReportChart"/>
        <xsd:element name="colorRanges" minOccurs="0" maxOccurs="unbounded" type="tns:ReportColorRange"/>
        <xsd:element name="columns" minOccurs="0" maxOccurs="unbounded" type="tns:ReportColumn"/>
        <xsd:element name="crossFilters" minOccurs="0" maxOccurs="unbounded" type="tns:ReportCrossFilter"/>
        <xsd:element name="currency" minOccurs="0" type="tns:CurrencyIsoCode"/>
        <xsd:element name="customDetailFormulas" minOccurs="0" maxOccurs="unbounded" type="tns:ReportCustomDetailFormula"/>
        <xsd:element name="dataCategoryFilters" minOccurs="0" maxOccurs="unbounded" type="tns:ReportDataCategoryFilter"/>
        <xsd:element name="description" minOccurs="0" type="xsd:string"/>
        <xsd:element name="division" minOccurs="0" type="xsd:string"/>
        <xsd:element name="filter" minOccurs="0" type="tns:ReportFilter"/>
        <xsd:element name="folderName" minOccurs="0" type="xsd:string"/>
        <xsd:element name="format" type="tns:ReportFormat"/>
        <xsd:element name="formattingRules" minOccurs="0" maxOccurs="unbounded" type="tns:ReportFormattingRule"/>
        <xsd:element name="groupingsAcross" minOccurs="0" maxOccurs="unbounded" type="tns:ReportGrouping"/>
        <xsd:element name="groupingsDown" minOccurs="0" maxOccurs="unbounded" type="tns:ReportGrouping"/>
        <xsd:element name="historicalSelector" minOccurs="0" type="tns:ReportHistoricalSelector"/>
        <xsd:element name="isSmartTotalDisabled" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="name" type="xsd:string"/>
        <xsd:element name="numSubscriptions" minOccurs="0" type="xsd:int"/>
        <xsd:element name="params" minOccurs="0" maxOccurs="unbounded" type="tns:ReportParam"/>
        <xsd:element name="reportType" type="xsd:string"/>
        <xsd:element name="reportTypeApiName" minOccurs="0" type="xsd:string"/>
        <xsd:element name="roleHierarchyFilter" minOccurs="0" type="xsd:string"/>
        <xsd:element name="rowLimit" minOccurs="0" type="xsd:int"/>
        <xsd:element name="scope" minOccurs="0" type="xsd:string"/>
        <xsd:element name="showCurrentDate" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="showDetails" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="showGrandTotal" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="showSubTotals" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="sortColumn" minOccurs="0" type="xsd:string"/>
        <xsd:element name="sortOrder" minOccurs="0" type="tns:SortOrder"/>
        <xsd:element name="territoryHierarchyFilter" minOccurs="0" type="xsd:string"/>
        <xsd:element name="timeFrameFilter" minOccurs="0" type="tns:ReportTimeFrameFilter"/>
        <xsd:element name="userFilter" minOccurs="0" type="xsd:string"/>
      </xsd:sequence>
    </xsd:extension>
  </xsd:complexContent>
</xsd:complexType>
<xsd:simpleType name="ReportAggrType">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="Sum"/>
    <xsd:enumeration value="Average"/>
    <xsd:enumeration value="Maximum"/>
    <xsd:enumeration value="Minimum"/>
    <xsd:enumeration value="Unique"/>
    <xsd:enumeration value="RowCount"/>
    <xsd:enumeration value="Median"/>
    <xsd:enumeration value="Noop"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="ReportAggregate">
  <xsd:sequence>
    <xsd:element name="acrossGroupingContext" minOccurs="0" type="xsd:string"/>
    <xsd:element name="calculatedFormula" type="xsd:string"/>
    <xsd:element name="datatype" type="tns:ReportAggregateDatatype"/>
    <xsd:element name="description" minOccurs="0" type="xsd:string"/>
    <xsd:element name="developerName" type="xsd:string"/>
    <xsd:element name="downGroupingContext" minOccurs="0" type="xsd:string"/>
    <xsd:element name="isActive" type="xsd:boolean"/>
    <xsd:element name="isCrossBlock" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="masterLabel" type="xsd:string"/>
    <xsd:element name="reportType" minOccurs="0" type="xsd:string"/>
    <xsd:element name="scale" minOccurs="0" type="xsd:int"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="ReportAggregateDatatype">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="currency"/>
    <xsd:enumeration value="percent"/>
    <xsd:enumeration value="number"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="ReportAggregateFilter">
  <xsd:sequence>
    <xsd:element name="aggregate" type="xsd:string"/>
    <xsd:element name="operator" type="xsd:string"/>
    <xsd:element name="value" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="ReportAggregateReference">
  <xsd:sequence>
    <xsd:element name="aggregate" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="ReportBlockInfo">
  <xsd:sequence>
    <xsd:element name="aggregateReferences" minOccurs="0" maxOccurs="unbounded" type="tns:ReportAggregateReference"/>
    <xsd:element name="blockId" type="xsd:string"/>
    <xsd:element name="joinTable" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="ReportBucketField">
  <xsd:sequence>
    <xsd:element name="bucketType" type="tns:ReportBucketFieldType"/>
    <xsd:element name="developerName" type="xsd:string"/>
    <xsd:element name="masterLabel" type="xsd:string"/>
    <xsd:element name="nullTreatment" minOccurs="0" type="tns:ReportFormulaNullTreatment"/>
    <xsd:element name="otherBucketLabel" minOccurs="0" type="xsd:string"/>
    <xsd:element name="sourceColumnName" type="xsd:string"/>
    <xsd:element name="useOther" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="values" minOccurs="0" maxOccurs="unbounded" type="tns:ReportBucketFieldValue"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="ReportBucketFieldSourceValue">
  <xsd:sequence>
    <xsd:element name="from" minOccurs="0" type="xsd:string"/>
    <xsd:element name="sourceValue" minOccurs="0" type="xsd:string"/>
    <xsd:element name="to" minOccurs="0" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="ReportBucketFieldType">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="text"/>
    <xsd:enumeration value="number"/>
    <xsd:enumeration value="picklist"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="ReportBucketFieldValue">
  <xsd:sequence>
    <xsd:element name="sourceValues" minOccurs="0" maxOccurs="unbounded" type="tns:ReportBucketFieldSourceValue"/>
    <xsd:element name="value" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="ReportChart">
  <xsd:sequence>
    <xsd:element name="backgroundColor1" minOccurs="0" type="xsd:string"/>
    <xsd:element name="backgroundColor2" minOccurs="0" type="xsd:string"/>
    <xsd:element name="backgroundFadeDir" minOccurs="0" type="tns:ChartBackgroundDirection"/>
    <xsd:element name="chartSummaries" minOccurs="0" maxOccurs="unbounded" type="tns:ChartSummary"/>
    <xsd:element name="chartType" type="tns:ChartType"/>
    <xsd:element name="enableHoverLabels" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="expandOthers" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="groupingColumn" minOccurs="0" type="xsd:string"/>
    <xsd:element name="legendPosition" minOccurs="0" type="tns:ChartLegendPosition"/>
    <xsd:element name="location" minOccurs="0" type="tns:ChartPosition"/>
    <xsd:element name="secondaryGroupingColumn" minOccurs="0" type="xsd:string"/>
    <xsd:element name="showAxisLabels" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="showPercentage" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="showTotal" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="showValues" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="size" minOccurs="0" type="tns:ReportChartSize"/>
    <xsd:element name="summaryAxisManualRangeEnd" minOccurs="0" type="xsd:double"/>
    <xsd:element name="summaryAxisManualRangeStart" minOccurs="0" type="xsd:double"/>
    <xsd:element name="summaryAxisRange" minOccurs="0" type="tns:ChartRangeType"/>
    <xsd:element name="textColor" minOccurs="0" type="xsd:string"/>
    <xsd:element name="textSize" minOccurs="0" type="xsd:int"/>
    <xsd:element name="title" minOccurs="0" type="xsd:string"/>
    <xsd:element name="titleColor" minOccurs="0" type="xsd:string"/>
    <xsd:element name="titleSize" minOccurs="0" type="xsd:int"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="ReportChartSize">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="Tiny"/>
    <xsd:enumeration value="Small"/>
    <xsd:enumeration value="Medium"/>
    <xsd:enumeration value="Large"/>
    <xsd:enumeration value="Huge"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="ReportColorRange">
  <xsd:sequence>
    <xsd:element name="aggregate" minOccurs="0" type="tns:ReportSummaryType"/>
    <xsd:element name="columnName" type="xsd:string"/>
    <xsd:element name="highBreakpoint" minOccurs="0" type="xsd:double"/>
    <xsd:element name="highColor" type="xsd:string"/>
    <xsd:element name="lowBreakpoint" minOccurs="0" type="xsd:double"/>
    <xsd:element name="lowColor" type="xsd:string"/>
    <xsd:element name="midColor" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="ReportColumn">
  <xsd:sequence>
    <xsd:element name="aggregateTypes" minOccurs="0" maxOccurs="unbounded" type="tns:ReportSummaryType"/>
    <xsd:element name="field" type="xsd:string"/>
    <xsd:element name="isExtendedColumn" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="reverseColors" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="showChanges" minOccurs="0" type="xsd:boolean"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="ReportCrossFilter">
  <xsd:sequence>
    <xsd:element name="criteriaItems" minOccurs="0" maxOccurs="unbounded" type="tns:ReportFilterItem"/>
    <xsd:element name="operation" type="tns:ObjectFilterOperator"/>
    <xsd:element name="primaryTableColumn" type="xsd:string"/>
    <xsd:element name="relatedTable" type="xsd:string"/>
    <xsd:element name="relatedTableJoinColumn" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="ReportCustomDetailFormula">
  <xsd:sequence>
    <xsd:element name="calculatedFormula" type="xsd:string"/>
    <xsd:element name="dataType" type="xsd:string"/>
    <xsd:element name="description" minOccurs="0" type="xsd:string"/>
    <xsd:element name="developerName" type="xsd:string"/>
    <xsd:element name="label" type="xsd:string"/>
    <xsd:element name="scale" type="xsd:int"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="ReportDataCategoryFilter">
  <xsd:sequence>
    <xsd:element name="dataCategory" type="xsd:string"/>
    <xsd:element name="dataCategoryGroup" type="xsd:string"/>
    <xsd:element name="operator" type="tns:DataCategoryFilterOperation"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="ReportFilter">
  <xsd:sequence>
    <xsd:element name="booleanFilter" minOccurs="0" type="xsd:string"/>
    <xsd:element name="criteriaItems" minOccurs="0" maxOccurs="unbounded" type="tns:ReportFilterItem"/>
    <xsd:element name="language" minOccurs="0" type="tns:Language"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="ReportFilterItem">
  <xsd:sequence>
    <xsd:element name="column" type="xsd:string"/>
    <xsd:element name="columnToColumn" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="isUnlocked" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="operator" type="tns:FilterOperation"/>
    <xsd:element name="snapshot" minOccurs="0" type="xsd:string"/>
    <xsd:element name="value" minOccurs="0" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="ReportFormat">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="MultiBlock"/>
    <xsd:enumeration value="Matrix"/>
    <xsd:enumeration value="Summary"/>
    <xsd:enumeration value="Tabular"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="ReportFormattingRule">
  <xsd:sequence>
    <xsd:element name="aggregate" minOccurs="0" type="tns:ReportSummaryType"/>
    <xsd:element name="columnName" type="xsd:string"/>
    <xsd:element name="values" minOccurs="0" maxOccurs="unbounded" type="tns:ReportFormattingRuleValue"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="ReportFormattingRuleValue">
  <xsd:sequence>
    <xsd:element name="backgroundColor" minOccurs="0" type="xsd:string"/>
    <xsd:element name="rangeUpperBound" minOccurs="0" type="xsd:double"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="ReportFormulaNullTreatment">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="n"/>
    <xsd:enumeration value="z"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="ReportGrouping">
  <xsd:sequence>
    <xsd:element name="aggregateType" minOccurs="0" type="tns:ReportAggrType"/>
    <xsd:element name="dateGranularity" minOccurs="0" type="tns:UserDateGranularity"/>
    <xsd:element name="field" type="xsd:string"/>
    <xsd:element name="sortByName" minOccurs="0" type="xsd:string"/>
    <xsd:element name="sortOrder" type="tns:SortOrder"/>
    <xsd:element name="sortType" minOccurs="0" type="tns:ReportSortType"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="ReportHistoricalSelector">
  <xsd:sequence>
    <xsd:element name="snapshot" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="ReportParam">
  <xsd:sequence>
    <xsd:element name="name" type="xsd:string"/>
    <xsd:element name="value" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="ReportSortType">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="Column"/>
    <xsd:enumeration value="Aggregate"/>
    <xsd:enumeration value="CustomSummaryFormula"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="ReportSummaryType">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="Sum"/>
    <xsd:enumeration value="Average"/>
    <xsd:enumeration value="Maximum"/>
    <xsd:enumeration value="Minimum"/>
    <xsd:enumeration value="Unique"/>
    <xsd:enumeration value="Median"/>
    <xsd:enumeration value="Noop"/>
    <xsd:enumeration value="None"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="ReportTimeFrameFilter">
  <xsd:sequence>
    <xsd:element name="dateColumn" type="xsd:string"/>
    <xsd:element name="endDate" minOccurs="0" type="xsd:date"/>
    <xsd:element name="interval" type="tns:UserDateInterval"/>
    <xsd:element name="startDate" minOccurs="0" type="xsd:date"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="SortOrder">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="Asc"/>
    <xsd:enumeration value="Desc"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="UserDateGranularity">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="None"/>
    <xsd:enumeration value="Day"/>
    <xsd:enumeration value="Week"/>
    <xsd:enumeration value="Month"/>
    <xsd:enumeration value="Quarter"/>
    <xsd:enumeration value="Year"/>
    <xsd:enumeration value="FiscalQuarter"/>
    <xsd:enumeration value="FiscalYear"/>
    <xsd:enumeration value="MonthInYear"/>
    <xsd:enumeration value="DayInMonth"/>
    <xsd:enumeration value="FiscalPeriod"/>
    <xsd:enumeration value="FiscalWeek"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="UserDateInterval">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="INTERVAL_CURRENT"/>
    <xsd:enumeration value="INTERVAL_CURNEXT1"/>
    <xsd:enumeration value="INTERVAL_CURPREV1"/>
    <xsd:enumeration value="INTERVAL_NEXT1"/>
    <xsd:enumeration value="INTERVAL_PREV1"/>
    <xsd:enumeration value="INTERVAL_CURNEXT3"/>
    <xsd:enumeration value="INTERVAL_CURFY"/>
    <xsd:enumeration value="INTERVAL_PREVFY"/>
    <xsd:enumeration value="INTERVAL_PREV2FY"/>
    <xsd:enumeration value="INTERVAL_AGO2FY"/>
    <xsd:enumeration value="INTERVAL_NEXTFY"/>
    <xsd:enumeration value="INTERVAL_PREVCURFY"/>
    <xsd:enumeration value="INTERVAL_PREVCUR2FY"/>
    <xsd:enumeration value="INTERVAL_CURNEXTFY"/>
    <xsd:enumeration value="INTERVAL_CUSTOM"/>
    <xsd:enumeration value="INTERVAL_YESTERDAY"/>
    <xsd:enumeration value="INTERVAL_TODAY"/>
    <xsd:enumeration value="INTERVAL_TOMORROW"/>
    <xsd:enumeration value="INTERVAL_LASTWEEK"/>
    <xsd:enumeration value="INTERVAL_THISWEEK"/>
    <xsd:enumeration value="INTERVAL_NEXTWEEK"/>
    <xsd:enumeration value="INTERVAL_LASTMONTH"/>
    <xsd:enumeration value="INTERVAL_THISMONTH"/>
    <xsd:enumeration value="INTERVAL_NEXTMONTH"/>
    <xsd:enumeration value="INTERVAL_LASTTHISMONTH"/>
    <xsd:enumeration value="INTERVAL_THISNEXTMONTH"/>
    <xsd:enumeration value="INTERVAL_CURRENTQ"/>
    <xsd:enumeration value="INTERVAL_CURNEXTQ"/>
    <xsd:enumeration value="INTERVAL_CURPREVQ"/>
    <xsd:enumeration value="INTERVAL_NEXTQ"/>
    <xsd:enumeration value="INTERVAL_PREVQ"/>
    <xsd:enumeration value="INTERVAL_CURNEXT3Q"/>
    <xsd:enumeration value="INTERVAL_CURY"/>
    <xsd:enumeration value="INTERVAL_PREVY"/>
    <xsd:enumeration value="INTERVAL_PREV2Y"/>
    <xsd:enumeration value="INTERVAL_AGO2Y"/>
    <xsd:enumeration value="INTERVAL_NEXTY"/>
    <xsd:enumeration value="INTERVAL_PREVCURY"/>
    <xsd:enumeration value="INTERVAL_PREVCUR2Y"/>
    <xsd:enumeration value="INTERVAL_CURNEXTY"/>
    <xsd:enumeration value="INTERVAL_LAST7"/>
    <xsd:enumeration value="INTERVAL_LAST30"/>
    <xsd:enumeration value="INTERVAL_LAST60"/>
    <xsd:enumeration value="INTERVAL_LAST90"/>
    <xsd:enumeration value="INTERVAL_LAST120"/>
    <xsd:enumeration value="INTERVAL_NEXT7"/>
    <xsd:enumeration value="INTERVAL_NEXT30"/>
    <xsd:enumeration value="INTERVAL_NEXT60"/>
    <xsd:enumeration value="INTERVAL_NEXT90"/>
    <xsd:enumeration value="INTERVAL_NEXT120"/>
    <xsd:enumeration value="LAST_FISCALWEEK"/>
    <xsd:enumeration value="THIS_FISCALWEEK"/>
    <xsd:enumeration value="NEXT_FISCALWEEK"/>
    <xsd:enumeration value="LAST_FISCALPERIOD"/>
    <xsd:enumeration value="THIS_FISCALPERIOD"/>
    <xsd:enumeration value="NEXT_FISCALPERIOD"/>
    <xsd:enumeration value="LASTTHIS_FISCALPERIOD"/>
    <xsd:enumeration value="THISNEXT_FISCALPERIOD"/>
    <xsd:enumeration value="CURRENT_ENTITLEMENT_PERIOD"/>
    <xsd:enumeration value="PREVIOUS_ENTITLEMENT_PERIOD"/>
    <xsd:enumeration value="PREVIOUS_TWO_ENTITLEMENT_PERIODS"/>
    <xsd:enumeration value="TWO_ENTITLEMENT_PERIODS_AGO"/>
    <xsd:enumeration value="CURRENT_AND_PREVIOUS_ENTITLEMENT_PERIOD"/>
    <xsd:enumeration value="CURRENT_AND_PREVIOUS_TWO_ENTITLEMENT_PERIODS"/>
  </xsd:restriction>
</xsd:simpleType>
```
