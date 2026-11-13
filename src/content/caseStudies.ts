// Case studies, English and Spanish. Rules: no em dashes, no client names without written OK,
// every number must match the client repo or a figure cleared in Website/GIO_DOSSIER.md.

type Section = { h: string; p: string[] };
export type CaseCopy = {
  metaTitle: string;
  metaDesc: string;
  badge: string;
  h1a: string;
  h1b: string;
  sub: string;
  stats: [string, string][];
  glanceTitle: string;
  glance: [string, string][];
  sections: Section[];
};
export type CaseStudy = { slug: string; en: CaseCopy; es: CaseCopy };

export const caseStudies: CaseStudy[] = [
  {
    slug: 'reconciliation',
    en: {
      metaTitle: 'Case Study: Multi-Location Sales Reconciliation | Vemor',
      metaDesc: 'How Vemor automated daily sales reconciliation for a four-location operator, cut 30+ hours a week of manual work, and earned three more systems on the trust it built.',
      badge: 'Multi-Location Operator',
      h1a: 'One report became', h1b: 'four systems.',
      sub: 'A four-location operator in Southern California was reconciling sales by hand. Vemor automated the reconciliation, proved it on real days, and then built the next three systems on the trust it earned.',
      stats: [
        ['30+ hrs/wk', 'of manual reconciliation, eliminated'],
        ['Same day', 'payment errors caught, not weeks later'],
        ['4 systems', 'reporting, asset tracking, voice, security'],
        ['Month 1', '"The system paid for itself"'],
      ],
      glanceTitle: 'At a glance',
      glance: [
        ['Client', 'Multi-location operator, Southern California'],
        ['Engagement', 'Custom build, then managed operations'],
        ['Systems', 'Nightly reconciliation, RFID asset tracking, bilingual voice agent, security management'],
        ['Status', 'Operated by Vemor today'],
      ],
      sections: [
        { h: 'The problem', p: [
          'Every sale at every location had to be matched against what the card processors actually deposited. That job belonged to the bookkeeper, and it took five days a week: printouts side by side, hunting voided invoices, checking discounts, finding payment errors.',
          'Even at full effort, mistakes slipped through and surfaced weeks later in accounting, when they were harder to explain and harder to recover.',
        ] },
        { h: 'What we found', p: [
          'The information already existed. Every invoice was in the point-of-sale database. Every deposit was in a settlement report from one of two card processors, each with its own format. The two sources never talked to each other, so a person had to stand between them.',
          'The work was not data entry. It was matching, and matching follows rules. That made it a job for code, not for an AI making judgment calls.',
        ] },
        { h: 'What we built', p: [
          'A pipeline that runs every night without anyone touching it. It collects the prior day\'s settlement reports from both processors, reads the point-of-sale database, and matches every payment to its invoice.',
          'Voided invoices are separated out first, so they do not show up as false errors. Everything else is checked line by line. Payment errors, mismatches between the card terminal and the invoice, and discounts are flagged with the invoice number and both amounts.',
          'Before the doors open, each location\'s report is in the owners\' inbox as a finished spreadsheet.',
        ] },
        { h: 'How we know it works', p: [
          'The report was built against real days, not test data, and revised through several rounds side by side with the bookkeeper until it matched the manual close.',
          'The system reads the database with read-only access. It cannot change a sale, delete an invoice, or alter a record. The worst it can do is report something wrong, and every flag shows the numbers behind it so a person can check it in seconds.',
        ] },
        { h: 'Where the line is', p: [
          'The system flags. It does not decide. Whether a discount was authorized or a mismatch was a mistake is still a human call. The system makes sure that call happens the same day, with the evidence in front of the person making it.',
          'If a day is missed for any reason, it can be rerun for any date range, so a gap never becomes a hole in the books.',
        ] },
        { h: 'The result', p: [
          'A full-time job became about an hour a day of reviewing reports that are already done. Payment errors are caught the same day instead of weeks later. In the owner\'s words: "The system paid for itself in the first month."',
          'Then the next problem came up: rental equipment going missing. Vemor built RFID tracking across all four locations, with an alert at closing when a unit is out and not on an invoice. Then a bilingual voice agent for the phones. Then security management. All four systems are operated by Vemor today.',
        ] },
        { h: 'What it taught us', p: [
          'The second system was only possible because the first one proved itself. The owner never agreed to four systems. The first yes was for one report, built on top of software the business already had, with nothing to rip out if it failed.',
          'That is the pattern Vemor works from. Commitments that are small and easy to reverse get made. Commitments that are large and hard to undo get postponed. Earn the first one, and the rest follow.',
        ] },
      ],
    },
    es: {
      metaTitle: 'Caso: conciliación de ventas en varias sucursales | Vemor',
      metaDesc: 'Cómo Vemor automatizó la conciliación diaria de ventas de un operador con cuatro sucursales, eliminó más de 30 horas semanales de trabajo manual y se ganó tres sistemas más con la confianza que construyó.',
      badge: 'Operador con varias sucursales',
      h1a: 'Un reporte se convirtió', h1b: 'en cuatro sistemas.',
      sub: 'Un operador con cuatro sucursales en el sur de California conciliaba sus ventas a mano. Vemor automatizó la conciliación, la comprobó con días reales y después construyó los siguientes tres sistemas sobre la confianza que se ganó.',
      stats: [
        ['30+ h/sem', 'de conciliación manual, eliminadas'],
        ['El mismo día', 'se detectan los errores de cobro, no semanas después'],
        ['4 sistemas', 'reportes, rastreo de activos, voz y seguridad'],
        ['Mes 1', '"El sistema se pagó solo"'],
      ],
      glanceTitle: 'En resumen',
      glance: [
        ['Cliente', 'Operador con varias sucursales, sur de California'],
        ['Tipo de proyecto', 'Proyecto a la medida, después operación administrada'],
        ['Sistemas', 'Conciliación nocturna, rastreo RFID de activos, agente de voz bilingüe, administración de seguridad'],
        ['Estado', 'Operado hoy por Vemor'],
      ],
      sections: [
        { h: 'El problema', p: [
          'Cada venta de cada sucursal tenía que cuadrarse contra lo que las procesadoras de tarjeta realmente depositaban. Ese trabajo le tocaba a contabilidad y se llevaba cinco días a la semana: impresiones lado a lado, buscar facturas canceladas, revisar descuentos, encontrar errores de cobro.',
          'Aun con todo el esfuerzo, los errores se colaban y aparecían semanas después en contabilidad, cuando ya eran más difíciles de explicar y de recuperar.',
        ] },
        { h: 'Qué encontramos', p: [
          'La información ya existía. Cada factura estaba en la base de datos del punto de venta. Cada depósito estaba en el reporte de liquidación de una de dos procesadoras, cada una con su propio formato. Las dos fuentes nunca se hablaban, así que una persona tenía que hacer de puente.',
          'El trabajo no era captura de datos. Era cruzar información, y cruzar información sigue reglas. Eso lo hacía un trabajo para código, no para una IA tomando decisiones de criterio.',
        ] },
        { h: 'Qué construimos', p: [
          'Un proceso que corre cada noche sin que nadie lo toque. Recoge los reportes de liquidación del día anterior de las dos procesadoras, lee la base de datos del punto de venta y cruza cada pago con su factura.',
          'Primero separa las facturas canceladas, para que no aparezcan como errores falsos. Todo lo demás se revisa renglón por renglón. Los errores de cobro, las diferencias entre la terminal y la factura, y los descuentos se marcan con el número de factura y los dos montos.',
          'Antes de abrir, el reporte de cada sucursal ya está en el correo de los dueños como una hoja de cálculo terminada.',
        ] },
        { h: 'Cómo sabemos que funciona', p: [
          'El reporte se construyó con días reales, no con datos de prueba, y se corrigió en varias rondas junto a contabilidad hasta que coincidió con el cierre manual.',
          'El sistema lee la base de datos con acceso de solo lectura. No puede cambiar una venta, borrar una factura ni alterar un registro. Lo peor que puede hacer es reportar algo mal, y cada alerta muestra los números que la respaldan para que una persona la revise en segundos.',
        ] },
        { h: 'Dónde está el límite', p: [
          'El sistema señala. No decide. Si un descuento estaba autorizado o una diferencia fue un error sigue siendo decisión de una persona. El sistema se asegura de que esa decisión se tome el mismo día, con la evidencia enfrente.',
          'Si por cualquier motivo se pierde un día, se puede volver a correr para cualquier rango de fechas, así que un hueco nunca se vuelve un faltante en los libros.',
        ] },
        { h: 'El resultado', p: [
          'Un trabajo de tiempo completo se convirtió en una hora diaria de revisar reportes que ya están hechos. Los errores de cobro se detectan el mismo día, no semanas después. En palabras del dueño: "El sistema se pagó solo en el primer mes."',
          'Luego surgió el siguiente problema: equipo de renta que desaparecía. Vemor instaló rastreo RFID en las cuatro sucursales, con una alerta al cierre cuando una unidad está fuera y no aparece en ninguna factura. Después, un agente de voz bilingüe para los teléfonos. Después, la administración de seguridad. Los cuatro sistemas los opera hoy Vemor.',
        ] },
        { h: 'Lo que aprendimos', p: [
          'El segundo sistema solo fue posible porque el primero demostró que funcionaba. El dueño nunca aceptó cuatro sistemas. El primer sí fue para un reporte, montado sobre el software que el negocio ya tenía, sin nada que quitar si fallaba.',
          'Ese es el patrón con el que trabaja Vemor. Los compromisos pequeños y fáciles de revertir se toman. Los grandes y difíciles de deshacer se posponen. Gánate el primero y los demás llegan solos.',
        ] },
      ],
    },
  },
  {
    slug: 'settlement-verification',
    en: {
      metaTitle: 'Case Study: Verified Settlement Data from Court Filings | Vemor',
      metaDesc: 'How Vemor built a settlement-data engine where every figure is matched to the court filing it came from, and what happened when the source check started failing.',
      badge: 'Legal Data',
      h1a: 'Settlement numbers', h1b: 'attorneys can check.',
      sub: 'Vemor Comps turns California\'s public PAGA settlement filings into comparables attorneys use in negotiation and mediation. The hard part was never reading the documents. It was making sure a wrong number never reaches a report.',
      stats: [
        ['20,000+', 'PAGA matters tracked'],
        ['100%', 'of reported figures matched to source text'],
        ['Daily', 'new filings monitored'],
        ['PDF + Excel', 'with the source filings attached'],
      ],
      glanceTitle: 'At a glance',
      glance: [
        ['Product', 'Vemor Comps'],
        ['Users', 'Attorneys at a national employment defense practice (pilot)'],
        ['Source', 'California DIR PAGA Case Search, public records'],
        ['Status', 'Operated by Vemor, corpus grows daily'],
      ],
      sections: [
        { h: 'The problem', p: [
          'When a PAGA claim goes to mediation, both sides argue about what similar cases settled for. Those numbers live in thousands of public court filings. Pulling them meant hours of associate time per case: finding the filings, reading them, keying numbers by hand.',
          'An AI model can read those filings in seconds. It will also hand back a confident number when it misread the document, and nothing in the output tells you which numbers those are. For a figure that may be cited in front of a mediator, that is not a small problem.',
        ] },
        { h: 'What we found', p: [
          'The model being wrong sometimes was never the real risk. The real risk was not knowing when. So the design question became: how does a wrong number get stopped before anyone relies on it?',
        ] },
        { h: 'What we built', p: [
          'A pipeline from public records to finished report. The AI reads each filing and proposes each figure together with the exact passage it came from. Code then checks that the passage appears word for word in the document. If it does not, the figure is withheld.',
          'Figures that pass go through arithmetic and consistency checks. Pay periods, workweeks, and workdays are kept exactly as each filing states them, never converted. Settlements that resolve different kinds of claims are never mixed in the same statistic.',
          'Records that fail a check are flagged with the reason, reviewed by a person, and kept out of the benchmarks. The finished report ships with the source filings, so anyone can check any number.',
        ] },
        { h: 'How we know it works', p: [
          'Every published figure is matched to the text of the document it came from. The checks are code, not judgment, so they run the same way every time.',
          'The system reads the court orders as well as the settlements. During the pilot it flagged a settlement whose approval had been denied, before an attorney cited it.',
        ] },
        { h: 'What broke', p: [
          'In late September, the share of settlement amounts failing the source check jumped from about 2% to 23%. Nothing in the code had changed.',
          'The system did what it was built to do. It withheld those figures instead of guessing, so the reports got thinner but nothing wrong went out. The cost was coverage, not accuracy.',
          'The cause was the paper itself. Some court pleading templates print each margin line number several times over to make it look bold, so the text came out with "21" reading as "222111" in front of the sentence. A true quote no longer matched the document word for word.',
          'We wrote a decoder for the repeated numbers, tested it so real clause numbers, street addresses, and years were left alone, and measured the effect: 623 documents had figures that could now be verified. The system also now keeps every rejected figure on file, so the next fix like this one can recover data without paying to read the documents again.',
        ] },
        { h: 'The result', p: [
          'Attorneys at a national employment defense practice piloted the platform for their mediation work. A firm report that used to take hours of associate time is generated in seconds, with the working Excel and the filings attached. The corpus tracks more than 20,000 matters and grows every morning.',
        ] },
        { h: 'What it taught us', p: [
          'Failing safe is a design decision, and it has a price. A system that withholds instead of guessing fills in more slowly. It also never puts a wrong number in front of the person relying on it, and that is the only kind of speed that matters when the number gets challenged.',
          'Coverage gaps are stated in every report, not hidden. Knowing what the data does not cover is part of the product.',
        ] },
      ],
    },
    es: {
      metaTitle: 'Caso: datos de acuerdos verificados a partir de expedientes | Vemor',
      metaDesc: 'Cómo Vemor construyó un motor de datos de acuerdos donde cada cifra se coteja con el expediente de donde salió, y qué pasó cuando la verificación empezó a fallar.',
      badge: 'Datos legales',
      h1a: 'Cifras de acuerdos', h1b: 'que los abogados pueden comprobar.',
      sub: 'Vemor Comps convierte los expedientes públicos de acuerdos PAGA de California en comparables que los abogados usan para negociar y mediar. Lo difícil nunca fue leer los documentos. Fue asegurar que un número equivocado nunca llegue a un reporte.',
      stats: [
        ['20,000+', 'asuntos PAGA rastreados'],
        ['100%', 'de las cifras reportadas cotejadas con su fuente'],
        ['Diario', 'monitoreo de nuevos expedientes'],
        ['PDF + Excel', 'con los expedientes fuente incluidos'],
      ],
      glanceTitle: 'En resumen',
      glance: [
        ['Producto', 'Vemor Comps'],
        ['Usuarios', 'Abogados de un despacho nacional de defensa laboral (piloto)'],
        ['Fuente', 'California DIR PAGA Case Search, registros públicos'],
        ['Estado', 'Operado por Vemor, el acervo crece a diario'],
      ],
      sections: [
        { h: 'El problema', p: [
          'Cuando un reclamo PAGA llega a mediación, las dos partes discuten en cuánto se arreglaron casos parecidos. Esos números están en miles de expedientes públicos. Sacarlos costaba horas de trabajo de un asociado por caso: encontrar los expedientes, leerlos y capturar las cifras a mano.',
          'Un modelo de IA puede leer esos expedientes en segundos. También te va a entregar un número con toda seguridad cuando leyó mal el documento, y nada en el resultado te dice cuáles son esos números. Para una cifra que se puede citar frente a un mediador, eso no es un problema menor.',
        ] },
        { h: 'Qué encontramos', p: [
          'Que el modelo se equivoque a veces nunca fue el verdadero riesgo. El riesgo era no saber cuándo. Así que la pregunta de diseño fue: ¿cómo se detiene un número equivocado antes de que alguien dependa de él?',
        ] },
        { h: 'Qué construimos', p: [
          'Un proceso que va de los registros públicos al reporte terminado. La IA lee cada expediente y propone cada cifra junto con el pasaje exacto de donde salió. Después, el código comprueba que ese pasaje aparezca palabra por palabra en el documento. Si no aparece, la cifra no se publica.',
          'Las cifras que pasan se someten a revisiones aritméticas y de consistencia. Los periodos de pago, semanas laborales y días laborales se conservan tal como los declara cada expediente, nunca se convierten. Los acuerdos que resuelven tipos distintos de reclamos nunca se mezclan en la misma estadística.',
          'Los registros que fallan una revisión se marcan con el motivo, los revisa una persona y se dejan fuera de las estadísticas. El reporte final se entrega con los expedientes fuente, para que cualquiera pueda comprobar cualquier número.',
        ] },
        { h: 'Cómo sabemos que funciona', p: [
          'Cada cifra publicada se coteja con el texto del documento de donde salió. Las revisiones son código, no criterio, así que corren igual todas las veces.',
          'El sistema lee también las resoluciones del tribunal, no solo los acuerdos. Durante el piloto marcó un acuerdo cuya aprobación había sido negada, antes de que un abogado lo citara.',
        ] },
        { h: 'Qué falló', p: [
          'A finales de septiembre, la proporción de montos de acuerdo que no pasaban la verificación de fuente saltó de alrededor de 2% a 23%. Nada en el código había cambiado.',
          'El sistema hizo lo que debía hacer. No publicó esas cifras en lugar de adivinarlas, así que los reportes quedaron más delgados, pero no salió nada equivocado. El costo fue cobertura, no exactitud.',
          'La causa estaba en el papel. Algunas plantillas de escritos judiciales imprimen varias veces cada número de línea del margen para que se vea en negritas, y el texto salía con "21" convertido en "222111" al inicio de la oración. Una cita verdadera ya no coincidía palabra por palabra con el documento.',
          'Escribimos un decodificador para los números repetidos, lo probamos para que no tocara números de cláusula, domicilios ni años, y medimos el efecto: 623 documentos tenían cifras que ahora se podían verificar. Además, el sistema ahora guarda cada cifra rechazada, para que la próxima corrección de este tipo recupere datos sin pagar por leer los documentos otra vez.',
        ] },
        { h: 'El resultado', p: [
          'Abogados de un despacho nacional de defensa laboral pusieron a prueba la plataforma en su trabajo de mediación. Un reporte por despacho que antes costaba horas de un asociado se genera en segundos, con el Excel de trabajo y los expedientes incluidos. El acervo rastrea más de 20,000 asuntos y crece cada mañana.',
        ] },
        { h: 'Lo que aprendimos', p: [
          'Fallar de forma segura es una decisión de diseño, y tiene un precio. Un sistema que prefiere no publicar antes que adivinar se llena más despacio. También nunca pone un número equivocado frente a quien depende de él, y esa es la única velocidad que importa cuando alguien cuestiona la cifra.',
          'Los huecos de cobertura se declaran en cada reporte, no se esconden. Saber qué no cubren los datos es parte del producto.',
        ] },
      ],
    },
  },
];
