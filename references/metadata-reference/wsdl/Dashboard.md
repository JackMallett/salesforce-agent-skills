# Dashboard — WSDL

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
<xsd:simpleType name="ChartColorPalettes">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="Default"/>
    <xsd:enumeration value="gray"/>
    <xsd:enumeration value="colorSafe"/>
    <xsd:enumeration value="unity"/>
    <xsd:enumeration value="justice"/>
    <xsd:enumeration value="nightfall"/>
    <xsd:enumeration value="sunrise"/>
    <xsd:enumeration value="bluegrass"/>
    <xsd:enumeration value="tropic"/>
    <xsd:enumeration value="heat"/>
    <xsd:enumeration value="dusk"/>
    <xsd:enumeration value="pond"/>
    <xsd:enumeration value="watermelon"/>
    <xsd:enumeration value="fire"/>
    <xsd:enumeration value="water"/>
    <xsd:enumeration value="earth"/>
    <xsd:enumeration value="accessible"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="ChartLegendPosition">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="Right"/>
    <xsd:enumeration value="Bottom"/>
    <xsd:enumeration value="OnChart"/>
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
<xsd:simpleType name="ChartTheme">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="light"/>
    <xsd:enumeration value="dark"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="ChartUnits">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="Auto"/>
    <xsd:enumeration value="Integer"/>
    <xsd:enumeration value="Hundreds"/>
    <xsd:enumeration value="Thousands"/>
    <xsd:enumeration value="Millions"/>
    <xsd:enumeration value="Billions"/>
    <xsd:enumeration value="Trillions"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="Dashboard">
  <xsd:complexContent>
    <xsd:extension base="tns:Metadata">
      <xsd:sequence>
        <xsd:element name="backgroundEndColor" type="xsd:string"/>
        <xsd:element name="backgroundFadeDirection" type="tns:ChartBackgroundDirection"/>
        <xsd:element name="backgroundStartColor" type="xsd:string"/>
        <xsd:element name="chartTheme" minOccurs="0" type="tns:ChartTheme"/>
        <xsd:element name="colorPalette" minOccurs="0" type="tns:ChartColorPalettes"/>
        <xsd:element name="dashboardChartTheme" minOccurs="0" type="tns:ChartTheme"/>
        <xsd:element name="dashboardColorPalette" minOccurs="0" type="tns:ChartColorPalettes"/>
        <xsd:element name="dashboardFilters" minOccurs="0" maxOccurs="unbounded" type="tns:DashboardFilter"/>
        <xsd:element name="dashboardGridLayout" minOccurs="0" type="tns:DashboardGridLayout"/>
        <xsd:element name="dashboardResultRefreshedDate" minOccurs="0" type="xsd:string"/>
        <xsd:element name="dashboardResultRunningUser" minOccurs="0" type="xsd:string"/>
        <xsd:element name="dashboardType" minOccurs="0" type="tns:DashboardType"/>
        <xsd:element name="description" minOccurs="0" type="xsd:string"/>
        <xsd:element name="folderName" minOccurs="0" type="xsd:string"/>
        <xsd:element name="isGridLayout" minOccurs="0" type="xsd:boolean"/>
        <xsd:element name="leftSection" minOccurs="0" type="tns:DashboardComponentSection"/>
        <xsd:element name="middleSection" minOccurs="0" type="tns:DashboardComponentSection"/>
        <xsd:element name="numSubscriptions" minOccurs="0" type="xsd:int"/>
        <xsd:element name="owner" minOccurs="0" type="xsd:string"/>
        <xsd:element name="rightSection" minOccurs="0" type="tns:DashboardComponentSection"/>
        <xsd:element name="runningUser" minOccurs="0" type="xsd:string"/>
        <xsd:element name="textColor" type="xsd:string"/>
        <xsd:element name="title" type="xsd:string"/>
        <xsd:element name="titleColor" type="xsd:string"/>
        <xsd:element name="titleSize" type="xsd:int"/>
      </xsd:sequence>
    </xsd:extension>
  </xsd:complexContent>
</xsd:complexType>
<xsd:complexType name="DashboardComponent">
  <xsd:sequence>
    <xsd:element name="autoselectColumnsFromReport" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="chartAxisRange" minOccurs="0" type="tns:ChartRangeType"/>
    <xsd:element name="chartAxisRangeMax" minOccurs="0" type="xsd:double"/>
    <xsd:element name="chartAxisRangeMin" minOccurs="0" type="xsd:double"/>
    <xsd:element name="chartSummary" minOccurs="0" maxOccurs="unbounded" type="tns:ChartSummary"/>
    <xsd:element name="componentChartTheme" minOccurs="0" type="tns:ChartTheme"/>
    <xsd:element name="componentType" type="tns:DashboardComponentType"/>
    <xsd:element name="dashboardComponentContents" minOccurs="0" maxOccurs="unbounded" type="tns:DashboardComponentContent"/>
    <xsd:element name="dashboardDynamicValues" minOccurs="0" maxOccurs="unbounded" type="tns:DashboardDynamicValue"/>
    <xsd:element name="dashboardFilterColumns" minOccurs="0" maxOccurs="unbounded" type="tns:DashboardFilterColumn"/>
    <xsd:element name="dashboardTableColumn" minOccurs="0" maxOccurs="unbounded" type="tns:DashboardTableColumn"/>
    <xsd:element name="decimalPrecision" minOccurs="0" type="xsd:int"/>
    <xsd:element name="displayUnits" minOccurs="0" type="tns:ChartUnits"/>
    <xsd:element name="drillDownUrl" minOccurs="0" type="xsd:string"/>
    <xsd:element name="drillEnabled" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="drillToDetailEnabled" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="enableHover" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="expandOthers" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="flexComponentProperties" minOccurs="0" type="tns:DashboardFlexTableComponentProperties"/>
    <xsd:element name="footer" minOccurs="0" type="xsd:string"/>
    <xsd:element name="gaugeMax" minOccurs="0" type="xsd:double"/>
    <xsd:element name="gaugeMin" minOccurs="0" type="xsd:double"/>
    <xsd:element name="groupingColumn" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
    <xsd:element name="groupingSortProperties" minOccurs="0" type="tns:DashboardComponentGroupingSortProperties"/>
    <xsd:element name="header" minOccurs="0" type="xsd:string"/>
    <xsd:element name="indicatorBreakpoint1" minOccurs="0" type="xsd:double"/>
    <xsd:element name="indicatorBreakpoint2" minOccurs="0" type="xsd:double"/>
    <xsd:element name="indicatorHighColor" minOccurs="0" type="xsd:string"/>
    <xsd:element name="indicatorLowColor" minOccurs="0" type="xsd:string"/>
    <xsd:element name="indicatorMiddleColor" minOccurs="0" type="xsd:string"/>
    <xsd:element name="legendPosition" minOccurs="0" type="tns:ChartLegendPosition"/>
    <xsd:element name="maxValuesDisplayed" minOccurs="0" type="xsd:int"/>
    <xsd:element name="metricLabel" minOccurs="0" type="xsd:string"/>
    <xsd:element name="page" minOccurs="0" type="xsd:string"/>
    <xsd:element name="pageHeightInPixels" minOccurs="0" type="xsd:int"/>
    <xsd:element name="report" minOccurs="0" type="xsd:string"/>
    <xsd:element name="scontrol" minOccurs="0" type="xsd:string"/>
    <xsd:element name="scontrolHeightInPixels" minOccurs="0" type="xsd:int"/>
    <xsd:element name="showPercentage" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="showPicturesOnCharts" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="showPicturesOnTables" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="showRange" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="showTotal" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="showValues" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="sortBy" minOccurs="0" type="tns:DashboardComponentFilter"/>
    <xsd:element name="sortLegendValues" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="title" minOccurs="0" type="xsd:string"/>
    <xsd:element name="useReportChart" minOccurs="0" type="xsd:boolean"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="DashboardComponentColumn">
  <xsd:sequence>
    <xsd:element name="breakPoint1" minOccurs="0" type="xsd:double"/>
    <xsd:element name="breakPoint2" minOccurs="0" type="xsd:double"/>
    <xsd:element name="breakPointOrder" minOccurs="0" type="xsd:int"/>
    <xsd:element name="highRangeColor" minOccurs="0" type="xsd:int"/>
    <xsd:element name="lowRangeColor" minOccurs="0" type="xsd:int"/>
    <xsd:element name="midRangeColor" minOccurs="0" type="xsd:int"/>
    <xsd:element name="reportColumn" type="xsd:string"/>
    <xsd:element name="showSubTotal" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="showTotal" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="type" type="tns:DashboardComponentColumnType"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="DashboardComponentColumnType">
  <xsd:restriction base="xsd:string"/>
</xsd:simpleType>
<xsd:complexType name="DashboardComponentContent">
  <xsd:sequence>
    <xsd:element name="additionalInfo" minOccurs="0" type="xsd:string"/>
    <xsd:element name="altText" minOccurs="0" type="xsd:string"/>
    <xsd:element name="componentParameters" minOccurs="0" type="xsd:string"/>
    <xsd:element name="fileName" minOccurs="0" type="xsd:string"/>
    <xsd:element name="fit" minOccurs="0" type="tns:Fit"/>
    <xsd:element name="horizontalAlignment" minOccurs="0" type="tns:HorizontalAlignment"/>
    <xsd:element name="richTextContent" minOccurs="0" type="xsd:string"/>
    <xsd:element name="tooltip" minOccurs="0" type="xsd:string"/>
    <xsd:element name="verticalAlignment" minOccurs="0" type="tns:VerticalAlignment"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="DashboardComponentFilter">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="RowLabelAscending"/>
    <xsd:enumeration value="RowLabelDescending"/>
    <xsd:enumeration value="RowValueAscending"/>
    <xsd:enumeration value="RowValueDescending"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="DashboardComponentGroupingSort">
  <xsd:sequence>
    <xsd:element name="groupingLevel" type="xsd:string"/>
    <xsd:element name="inheritedReportGroupingSort" minOccurs="0" type="xsd:string"/>
    <xsd:element name="sortColumn" minOccurs="0" type="xsd:string"/>
    <xsd:element name="sortOrder" minOccurs="0" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="DashboardComponentGroupingSortProperties">
  <xsd:sequence>
    <xsd:element name="groupingSorts" minOccurs="0" maxOccurs="unbounded" type="tns:DashboardComponentGroupingSort"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="DashboardComponentSection">
  <xsd:sequence>
    <xsd:element name="columnSize" type="tns:DashboardComponentSize"/>
    <xsd:element name="components" minOccurs="0" maxOccurs="unbounded" type="tns:DashboardComponent"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="DashboardComponentSize">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="Narrow"/>
    <xsd:enumeration value="Medium"/>
    <xsd:enumeration value="Wide"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="DashboardComponentSortInfo">
  <xsd:sequence>
    <xsd:element name="sortColumn" minOccurs="0" type="xsd:string"/>
    <xsd:element name="sortOrder" minOccurs="0" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="DashboardComponentType">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="Bar"/>
    <xsd:enumeration value="BarGrouped"/>
    <xsd:enumeration value="BarStacked"/>
    <xsd:enumeration value="BarStacked100"/>
    <xsd:enumeration value="Column"/>
    <xsd:enumeration value="ColumnGrouped"/>
    <xsd:enumeration value="ColumnStacked"/>
    <xsd:enumeration value="ColumnStacked100"/>
    <xsd:enumeration value="Line"/>
    <xsd:enumeration value="LineGrouped"/>
    <xsd:enumeration value="Pie"/>
    <xsd:enumeration value="Table"/>
    <xsd:enumeration value="Metric"/>
    <xsd:enumeration value="Gauge"/>
    <xsd:enumeration value="LineCumulative"/>
    <xsd:enumeration value="LineGroupedCumulative"/>
    <xsd:enumeration value="Scontrol"/>
    <xsd:enumeration value="VisualforcePage"/>
    <xsd:enumeration value="Donut"/>
    <xsd:enumeration value="Funnel"/>
    <xsd:enumeration value="ColumnLine"/>
    <xsd:enumeration value="ColumnLineGrouped"/>
    <xsd:enumeration value="ColumnLineStacked"/>
    <xsd:enumeration value="ColumnLineStacked100"/>
    <xsd:enumeration value="Scatter"/>
    <xsd:enumeration value="ScatterGrouped"/>
    <xsd:enumeration value="FlexTable"/>
    <xsd:enumeration value="Image"/>
    <xsd:enumeration value="RichText"/>
    <xsd:enumeration value="PulseMetric"/>
    <xsd:enumeration value="LightningWebComponent"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="DashboardDynamicValue">
  <xsd:sequence>
    <xsd:element name="additionalInfo" minOccurs="0" type="xsd:string"/>
    <xsd:element name="fieldName" type="xsd:string"/>
    <xsd:element name="isDynamicUser" minOccurs="0" type="xsd:boolean"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="DashboardFilter">
  <xsd:sequence>
    <xsd:element name="dashboardFilterOptions" minOccurs="0" maxOccurs="unbounded" type="tns:DashboardFilterOption"/>
    <xsd:element name="name" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="DashboardFilterColumn">
  <xsd:sequence>
    <xsd:element name="column" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="DashboardFilterOperation">
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
    <xsd:enumeration value="between"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:complexType name="DashboardFilterOption">
  <xsd:sequence>
    <xsd:element name="operator" type="tns:DashboardFilterOperation"/>
    <xsd:element name="values" minOccurs="0" maxOccurs="unbounded" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="DashboardFlexTableComponentProperties">
  <xsd:sequence>
    <xsd:element name="decimalPrecision" minOccurs="0" type="xsd:int"/>
    <xsd:element name="flexTableColumn" minOccurs="0" maxOccurs="unbounded" type="tns:DashboardComponentColumn"/>
    <xsd:element name="flexTableSortInfo" minOccurs="0" type="tns:DashboardComponentSortInfo"/>
    <xsd:element name="hideChatterPhotos" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="useReportTableSetting" minOccurs="0" type="xsd:boolean"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="DashboardGridComponent">
  <xsd:sequence>
    <xsd:element name="colSpan" type="xsd:int"/>
    <xsd:element name="columnIndex" type="xsd:int"/>
    <xsd:element name="dashboardComponent" type="tns:DashboardComponent"/>
    <xsd:element name="rowIndex" type="xsd:int"/>
    <xsd:element name="rowSpan" type="xsd:int"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="DashboardGridLayout">
  <xsd:sequence>
    <xsd:element name="dashboardGridComponents" minOccurs="0" maxOccurs="unbounded" type="tns:DashboardGridComponent"/>
    <xsd:element name="numberOfColumns" type="xsd:int"/>
    <xsd:element name="rowHeight" type="xsd:int"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:complexType name="DashboardTableColumn">
  <xsd:sequence>
    <xsd:element name="aggregateType" minOccurs="0" type="tns:ReportSummaryType"/>
    <xsd:element name="calculatePercent" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="column" type="xsd:string"/>
    <xsd:element name="decimalPlaces" minOccurs="0" type="xsd:int"/>
    <xsd:element name="showSubTotal" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="showTotal" minOccurs="0" type="xsd:boolean"/>
    <xsd:element name="sortBy" minOccurs="0" type="tns:DashboardComponentFilter"/>
  </xsd:sequence>
</xsd:complexType>
<xsd:simpleType name="DashboardType">
  <xsd:restriction base="xsd:string">
    <xsd:enumeration value="SpecifiedUser"/>
    <xsd:enumeration value="LoggedInUser"/>
    <xsd:enumeration value="MyTeamUser"/>
  </xsd:restriction>
</xsd:simpleType>
<xsd:simpleType name="Fit">
  <xsd:restriction base="xsd:string"/>
</xsd:simpleType>
<xsd:simpleType name="HorizontalAlignment">
  <xsd:restriction base="xsd:string"/>
</xsd:simpleType>
<xsd:complexType name="Metadata">
  <xsd:sequence>
    <xsd:element name="fullName" minOccurs="0" type="xsd:string"/>
  </xsd:sequence>
</xsd:complexType>
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
<xsd:simpleType name="VerticalAlignment">
  <xsd:restriction base="xsd:string"/>
</xsd:simpleType>
```
