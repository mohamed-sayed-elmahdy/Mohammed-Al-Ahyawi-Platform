import type {
  VisitRequestFormValues,
  VisitRequestSubmissionResult,
  Web3FormsApiResponse,
  Web3FormsVisitRequestPayload,
} from "@/types/website";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

function isSuccessfulResponse(
  value: unknown
): value is Web3FormsApiResponse {
  return (
    typeof value === "object" &&
    value !== null &&
    "success" in value &&
    value.success === true
  );
}

export async function submitVisitRequest(
  values: VisitRequestFormValues,
  botcheck: string
): Promise<VisitRequestSubmissionResult> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return { success: false, reason: "not-configured" };
  }

  const payload: Web3FormsVisitRequestPayload = {
    access_key: accessKey,
    subject: `طلب زيارة جديد: ${values.name.trim()}`,
    from_name: "منصة محمد الإحيوي - طلب زيارة",
    replyto: values.email.trim(),
    name: values.name.trim(),
    email: values.email.trim(),
    phone: `${values.phoneCode} ${values.phoneNumber.trim()}`,
    country: values.country,
    city: values.city.trim(),
    visit_details: values.details.trim(),
    visit_terms: "تمت الموافقة على ضوابط الزيارة",
    botcheck,
  };

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return { success: false, reason: "request-failed" };
    }
    const result: unknown = await response.json();
    if (isSuccessfulResponse(result)) {
      return { success: true };
    }
    return { success: false, reason: "rejected" };
  } catch {
    return { success: false, reason: "request-failed" };
  }
}