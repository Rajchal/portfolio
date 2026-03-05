import { certifications } from "../constants";

const Certifications = () => {
    return (
        <section className="c-space my-20" id="certifications">
            <h3 className="head-text pt-20">Certifications</h3>

            <div className="cert-container">
                {certifications.map((cert) => (
                    <a
                        key={cert.id}
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="cert-card"
                    >
                        <div className="w-14 h-14 rounded-xl bg-black-300 p-3 flex items-center justify-center border border-black-200">
                            <img src={cert.icon} alt={cert.title} className="w-full h-full object-contain" />
                        </div>

                        <div className="flex-1">
                            <p className="text-white-800 font-semibold text-lg leading-snug">
                                {cert.title}
                            </p>
                            <p className="text-white-600 text-sm mt-1">
                                {cert.issuer} · Issued {cert.issued}
                            </p>
                        </div>

                        <img
                            src={`${import.meta.env.BASE_URL}assets/arrow-up.png`}
                            className="w-3 h-3"
                            alt="open"
                        />
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Certifications;