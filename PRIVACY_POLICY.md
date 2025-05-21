BEGIN FILE .notes/PRIVACY_POLICY.md
## Privacy Policy

**Last updated:** October 26, 2023
**Effective Date:** October 26, 2023

This Privacy Policy ("Policy") describes how Jobee Development Limited ("Company," "we," "us," or "our") collects, uses, and shares personal information of users of our mobile application, Dispatch Commander ("App"), and our related services (collectively, the "Services"). This Policy applies to our App as distributed on mobile application stores and any associated web presence.

This document is provided for general information and does not constitute legal advice.

## 1. Introduction & Scope {#introduction-scope}

Welcome to Dispatch Commander. Your privacy is important to us. This Policy explains what information we collect from you, how we use and protect that information, and your rights regarding your information. By using our Services, you agree to the collection and use of information in accordance with this Policy. If you do not agree with the terms of this Policy, please do not access or use our Services.

## 2. Information We Collect {#information-we-collect}

We collect several different types of information for various purposes to provide and improve our Services to you.

### Data provided by users {#data-provided-by-users}

We may collect personal information that you voluntarily provide to us when you:
*   Contact us for support or inquiries (e.g., email address, content of your communication, if such a channel is provided in-app or referenced).
*   Participate in surveys or promotions (if applicable).
*   Customize in-game elements, such as providing a callsign for your units.

### Automatic data (device, usage, diagnostics) {#automatic-data}

When you use our App, we may automatically collect certain information, including:
*   **Device Information:** Device type, operating system and version. We also generate a unique identifier (a universally unique identifier, UUID) for your app installation to distinguish it from others; this ID is stored on your device and will persist until the app is uninstalled or its data is cleared. This ID is not a hardware-based identifier like an IDFA or Android Advertising ID. We may also collect screen resolution, IP address (as part of network communications, see Network Data section), and mobile network information.
*   **Usage Data:** Information about how you use the App, such as features accessed, game progress, session duration, interactions with game elements, and in-app purchases. This includes statistics related to Mapbox API usage (e.g., number of map loads, routes calculated) which are stored locally on your device for diagnostic and performance monitoring purposes.
*   **Diagnostic Data:** Crash reports, performance data, and error logs to help us identify and fix problems. This includes the aforementioned Mapbox API usage statistics.

### Location data (via Mapbox SDK) {#location-data}

Our App utilizes the Mapbox SDK to provide map-based functionalities such as displaying in-game locations (e.g., incidents, stations, unit routes) and calculating routes between these points. We have explicitly disabled Mapbox's own telemetry data collection.

**Important Clarification on User Location:** This App **does not** request access to, collect, or process your device's precise GPS location (e.g., for displaying your real-world location on the map). The term "location data" in the context of our Mapbox usage refers to the coordinates of in-game elements and the routes generated between them by Mapbox services.

*   **Collection Frequency and Purpose:** Mapbox services are used to fetch map tiles, calculate routes for in-game units, and potentially geocode in-game addresses. This occurs when map features are active or game logic requires route calculations.
*   **Opt-out Mechanisms:** As we do not collect your device's precise GPS location, standard device location service opt-outs are not directly applicable to this specific Mapbox usage. Your interaction with map features is inherent to gameplay.
*   **Mapbox's Role:** Mapbox acts as a data processor for the data sent to its APIs (e.g., coordinates for routing, IP address as part of standard HTTPS requests). Mapbox's processing of this data is governed by their privacy policy. We encourage you to review the [Mapbox Privacy Policy](https://www.mapbox.com/legal/privacy) (particularly Section 2 regarding "Information We Collect Automatically When You Use Our Services and Our Customers' Applications").

### Network data / edge logs (via Cloudflare Workers/Proxy) {#network-data}

Our App uses Cloudflare services (Workers and Proxy) for certain backend functionalities (like daily challenges and API quota management), content delivery, security, and performance optimization.
*   **Data Sent to Cloudflare Workers:** When interacting with these backend functionalities, your app-generated unique identifier (UUID) may be sent to our Cloudflare Worker to manage API quotas. Standard network request information, such as your IP address, is also processed by Cloudflare.
*   **Edge Caching & Logs:** Cloudflare may cache game assets and content closer to your location to improve App speed and reliability. Cloudflare also logs network traffic data, which may include your IP address, for security purposes (e.g., to detect and mitigate DDoS attacks, identify malicious traffic) and to provide analytics about service usage.
*   **IP Anonymization:** Where feasible and configured at the Cloudflare level, we aim to utilize Cloudflare's IP anonymization features.
*   **Cloudflare's Role:** Cloudflare acts as a data sub-processor for network data and logs. Cloudflare's handling of this data is governed by their privacy policy. We recommend reviewing the [Cloudflare Privacy Policy](https://www.cloudflare.com/privacypolicy/) (particularly Section 3 concerning "Information collected from End Users").

## 3. How We Use Information {#how-we-use-information}

We use the collected information for various purposes:
*   To provide, operate, and maintain our Services, including features like daily challenges.
*   To manage and enforce API quotas for services like Mapbox, using your app-generated UUID via our Cloudflare Worker.
*   To personalize and improve your experience with the App.
*   To manage your account (if applicable - currently no account system is in place) and provide customer support.
*   To process in-app purchases and transactions.
*   To monitor and analyze usage, trends, and activities in connection with our Services.
*   To detect, prevent, and address technical issues and security incidents.
*   To ensure legal and regulatory compliance.
*   For game balancing and to enhance gameplay mechanics.
*   To communicate with you about updates, security alerts, and support messages.

## 4. Legal Bases for Processing (GDPR Art. 6) {#legal-bases-for-processing}

If you are in the European Economic Area (EEA), our legal basis for collecting and using the personal information described in this Policy depends on the Personal Data we collect and the specific context in which we collect it. We may process your Personal Data because:
*   **Consent:** You have given us permission to do so (e.g., for location data, direct marketing if applicable). You may withdraw your consent at any time.
*   **Contractual Necessity:** Processing is necessary for the performance of a contract with you (e.g., to provide the Services you requested, manage your in-app purchases).
*   **Legitimate Interests:** Processing is in our legitimate interests and not overridden by your data protection interests or fundamental rights and freedoms (e.g., to improve our Services, ensure security, prevent fraud, analyze usage).
*   **Legal Obligation:** Processing is necessary for compliance with a legal obligation to which we are subject.

## 5. Sharing & Disclosure {#sharing-disclosure}

We do not sell your personal information. We may share your information in the following circumstances:

*   **Service Providers:** We may share your information with third-party vendors, consultants, and other service providers who perform services on our behalf, such as hosting, data analytics, payment processing, customer service, and technical support. These service providers are authorized to use your personal information only as necessary to provide these services to us and are obligated to protect your information.
    *   **Mapbox:** As described in Section 2, for maps and geolocation services for in-game elements. Mapbox acts as a data processor.
    *   **Cloudflare:** As described in Section 2, for backend functionalities (like daily challenges and API quota management using your app-generated UUID), content delivery network, and security services. Cloudflare acts as a data sub-processor.
    *   **Analytics / Crash Reporting:** We do not employ additional third-party analytics or crash reporting services beyond the internal diagnostic data collection described in Section 2 (e.g., Mapbox API usage stats stored locally) and any anonymized or aggregated data provided by Cloudflare for service monitoring. Standard platform-provided crash reporting (e.g., from Apple or Google) may also occur.

*   **Law Enforcement or Legal Requests:** We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency), or if we believe in good faith that disclosure is necessary to:
    *   Comply with a legal obligation.
    *   Protect and defend our rights or property.
    *   Prevent or investigate possible wrongdoing in connection with the Services.
    *   Protect the personal safety of users of the Services or the public.
    *   Protect against legal liability.

*   **Corporate Transactions:** If we are involved in a merger, acquisition, financing due diligence, reorganization, bankruptcy, receivership, sale of company assets, or transition of service to another provider, your information may be sold or transferred as part of such a transaction as permitted by law and/or contract.

## 6. Cookies & Similar Technologies {#cookies-similar-technologies}

Our App primarily operates without traditional web browser cookies as there is no associated web portal. However, the SDKs and technologies we use (such as Mapbox and Cloudflare, and services like `AsyncStorage` on your device) may use identifiers or local storage mechanisms similar to cookies to:
*   Ensure the Services function correctly (e.g., storing your app-generated UUID, game state).
*   Remember your preferences and settings if applicable.
*   Analyze usage and performance (e.g., local storage of Mapbox API statistics).
*   Provide security features.

For instance, device identifiers (like IDFA or Android Ad ID, though we use a self-generated UUID instead as described in Section 2) may be used by the platform or other SDKs for analytics or to personalize your experience if you have consented to such uses through your device settings. The ePrivacy Directive requirements concerning consent for access to or storage of information on a user's terminal equipment are considered for any data stored locally, such as the app-generated UUID and locally stored diagnostic data.

## 7. International Transfers & Standard Contractual Clauses {#international-transfers}

Your information, including personal data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction.

If you are located in the European Economic Area (EEA), the United Kingdom (UK), or Switzerland, please note that we may transfer your personal data to countries outside of these regions, including the United States. When we do so, we will ensure that appropriate safeguards are in place to protect your personal data, such as by using Standard Contractual Clauses (SCCs) approved by the European Commission, or by relying on an adequacy decision, or other lawful mechanisms. Our service providers, Mapbox and Cloudflare, also outline their data transfer mechanisms in their respective privacy policies.

By using our Services and providing your information, you consent to these transfers, provided that appropriate safeguards are in place.

## 8. Security Measures {#security-measures}

We take the security of your data seriously and implement appropriate technical and organizational measures to protect it from unauthorized access, use, alteration, disclosure, or destruction. These measures include:
*   **End-to-end TLS/SSL encryption:** For data transmitted between your device and our servers, and between our servers and third-party service providers where applicable.
*   **At-rest encryption:** Protecting data stored on our servers and by our service providers.
*   **Least Privilege Access:** Limiting access to personal data to personnel who require it for their job functions.
*   **Cloudflare Web Application Firewall (WAF):** To protect against common web exploits and malicious traffic.
*   **Mapbox Key Scoping:** Utilizing Mapbox's security features to limit the permissions of API keys.
*   Regular security assessments and updates.

However, please remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.

## 9. Data Retention {#data-retention}

We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy.

*   **Client-Side Data:** Information stored on your device, such as the app-generated UUID and locally stored diagnostic data (e.g., Mapbox API usage statistics in `AsyncStorage`), persists until the App's data is cleared by you or the App is uninstalled.
*   **Server-Side Data (Cloudflare Workers):** Data processed by our Cloudflare Workers, such as the app-generated UUID sent for API quota management and associated logs maintained by Cloudflare, will be retained for up to one year. After this period, it will be deleted or anonymized if retained for statistical purposes.
*   **General Retention:** We will retain and use your information to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.

Usage data and diagnostic data may be retained for internal analysis purposes. This data is generally retained for a shorter period, except when it is used to strengthen the security or to improve the functionality of our Service, or we are legally obligated to retain this data for longer periods.

## 10. Your Rights {#your-rights}

You have certain rights regarding your personal information, subject to local data protection laws.

### GDPR (General Data Protection Regulation) {#gdpr-rights}

If you are a resident of the EEA, you have the following data protection rights:
*   **Access:** The right to request copies of your personal data.
*   **Rectification:** The right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.
*   **Erasure (Right to be Forgotten):** The right to request that we erase your personal data, under certain conditions.
*   **Restriction of Processing:** The right to request that we restrict the processing of your personal data, under certain conditions.
*   **Data Portability:** The right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.
*   **Objection to Processing:** The right to object to our processing of your personal data, under certain conditions, particularly where we rely on legitimate interests as our legal basis.

### CCPA (California Consumer Privacy Act) {#ccpa-rights}

If you are a California resident, you have the following rights:
*   **Right to Know:** The right to request information about the categories and specific pieces of personal information we have collected about you, as well as the categories of sources from which such information is collected, the purpose for collecting such information, and the categories of third parties with whom we share such information.
*   **Right to Delete:** The right to request the deletion of your personal information, subject to certain exceptions.
*   **Right to Opt-Out of Sale:** We do not sell personal information, so this right is not applicable in that regard. If our practices change, we will update this policy. (Based on `TODO: SALE_YN` = No)
*   **Right to Non-Discrimination:** The right not to be discriminated against for exercising any of your CCPA rights.

### Children's Privacy (COPPA - Children's Online Privacy Protection Act) {#childrens-privacy}

Our Services are not directed to children under the age of 16, and we do not knowingly collect personal information from children under 16. If you are a parent or guardian and you are aware that your child has provided us with personal information without your consent, please contact us. If we become aware that we have collected personal information from children under 16 without verification of parental consent, we take steps to remove that information from our servers.

`TODO: CHILDREN_MINIMUM_AGE` is 16. If the app is directed at children under 13, or if you collect data from users known to be under 13, specific COPPA-compliant mechanisms (e.g., verifiable parental consent) must be implemented and detailed here. Given the app's nature and stated minimum age of 16, this section assumes it's not targeted at younger children.

If `TODO: REGION_SPECIFIC_LAWS` applies, include relevant rights here.

To exercise any of these rights, please contact us at jobee.dev@gmail.com. We will respond to your request in accordance with applicable law.

## 11. Third-Party Links {#third-party-links}

Our Services may contain links to other websites or services that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.

## 12. Changes to This Policy {#changes-to-this-policy}

We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy. We may also provide notice through the App or via email, if appropriate. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.

## 13. Contact Us {#contact-us}

If you have any questions about this Privacy Policy, please contact us:

Jobee Development Limited
7/20 Western Harbour View
EH6 6PF
United Kingdom
Email: jobee.dev@gmail.com

END FILE 